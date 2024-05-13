import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed h-20 bg-white shadow-md flex justify-between items-center z-10">
      <a href="/" className="text-2xl font-semibold pl-4 hover:text-gray-6">Sahayak</a>
      <ul className="flex gap-8 text-xl font-medium mr-4">
        <a href="/Courses" className="font-medium text-xl px-4 py-2 rounded-md text-black hover:text-gray-600 list-style-none">
          Courses
        </a>

        <a href="/blog" className="font-medium text-xl px-4 py-2 rounded-md text-black hover:text-gray-600 list-style-none">
          Blogs
        </a>

        <a href="/Contact" className="font-medium text-xl px-4 py-2 rounded-md text-black hover:text-gray-600 list-style-none">
          Contact Us
        </a>

        <a href="/Aboutus" className="font-medium text-xl px-4 py-2 rounded-md text-black hover:text-gray-600 list-style-none">
          About us
        </a>






      </ul>
      <div className="flex gap-4">
        <a href="/login" className="bg-greene text-white hover:bg-gray-700 px-4 py-2 rounded-md font-semibold">Login</a>
        <a href="/signup" className="bg-greene text-white hover:bg-gray-700 px-4 py-2 rounded-md font-semibold">Sign Up</a>

      </div>
    </nav>
  );
};

export default Navbar;
