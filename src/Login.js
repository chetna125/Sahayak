import React from 'react';

export default function Login() {
  return (
    <div className="flex min-h-screen">
     
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img src="../login2.png" alt="" className="w-full max-h-screen object-cover" />
      </div>

     
      <div className="w-7/12 px-8 py-12 bg-white rounded-md shadow-md flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center text-greene uppercase mb-8">
          Login
        </h1>
        <form className="space-y-4 w-full md:w-2/3">  
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-greene focus:ring-2"
              placeholder="Enter your email address"
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
            Login
          </button>
        </form>
        <div className="flex items-center mt-6">
          <div className="mr-4 text-sm text-gray-500">Don't have an account?</div>
          <a href="/signup" className="text-sm font-semibold text-greene hover:underline">
            Sign up
          </a>
        </div>
      </div>

      
    </div>

    

    
  );
}
