import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './Signup';
import LoginPage from './Login';
import HomePage from './Home';
import ContactForm from './Contact';
import Navbar from './Navbar';
import Courses from './Courses';
import Footer from './Footer';
import Blog from './Blog';
import Aboutus from './Aboutus';




function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Aboutus' element={<Aboutus />} />


        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
