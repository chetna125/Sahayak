// Login.js
import React from 'react';

const Lower = () => {
  return (
    <div className='flex justify-between items-center h-full w-full '>
      <div className='flex flex-col ml-24'>
        <h1 className='text-9xl font-bold text-greene'>Sahayak</h1>
        <div>
          <h1 className='text-5xl mt-5 font-medium text-greey'>
            A step towards
            <br />
            the society
          </h1>
        </div>

        <p className='text-xl mt-5 text-greey'>Join Sahayak to learn about the education for the society </p>
        <a href="/login" className='w-4/12 text-center bg-greeen px-5 py-4 mt-10 rounded-2xl text-lg font-bold text-white'>GET STARTED</a>
      </div>

      <img src='../main.png'alt='' className='w-4/12 z-[1] fixed right-[0]'></img>


      <img src='../Vector 1.png' alt='' className='w-4/12 fixed right-0 bottom-0 z-[0]'></img>

    </div>
  );
};

export default Lower;
