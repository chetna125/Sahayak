const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const path = require('path');  // For serving the React build later

const app = express();

app.use(cors());


require('dotenv').config();

// MongoDB connection
mongoose.connect('mongodb+srv://anurag:anuragbhatt@cluster0.thhuwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return (candidatePassword === this.password)
};

const User = mongoose.model('User', userSchema);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password // Important: Hash the password before storing
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully',
            sucess : true
         });
    } catch (error) {
        if (error.code === 11000) { // Error code for duplicate key
            res.status(409).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
});

// Serve the React frontend (for production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the password matches
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful', user,
            "sucess" : true
         });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


const port = process.env.PORT || 5000; // Use environment variable in production mode
app.listen(port, () => console.log(`Server listening on port ${port}`));
