import React , {useState} from 'react';

import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Basic frontend validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        password,
      });
  
      if (response.data.sucess) {
        // Handle successful signup
        console.log('Signup successful:', response.data.message);
        // For example, you can display a success message and clear the form
        alert('Signup successful! You can now login.'); // Display success message
        setEmail(''); // Clear email field
        setPassword(''); // Clear password field
        setConfirmPassword(''); // Clear confirm password field
      } else {
        // Handle signup error
        console.log(response.data.succ
        )
        setErrorMessage(response.data.error || 'Signup failed');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Signup failed');
      } else {
        setErrorMessage('Network error. Please check your connection.');
      }
    }
  };
  

return (
    <div className="flex min-h-screen">
      {/* Left-hand side for image */}

      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img
          src="../signup.png"
          alt=""
          className="w-full max-h-screen object-cover"
        />
      </div>

      {/* Right-hand side for signup form */}
      <div className="w-7/12 px-8 py-12 bg-white rounded-md shadow-md flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center text-greene uppercase mb-8">
          Sign Up
        </h1>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form className="space-y-4 w-full md:w-2/3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-greene focus:ring-2"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-greene focus:ring-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-greene focus:ring-2"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="mr-2 form-checkbox h-5 w-5 text-greene focus:ring-greene"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-greene text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greene"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center mt-6">
          <div className="mr-4 text-sm text-gray-500">Already have an account?</div>
          <a href="/login" className="text-sm font-semibold text-greene hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
    
    
  
  );
}
