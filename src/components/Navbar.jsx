import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/Movie-App/'>
        <h1 className='text-pink-400 text-2xl font-light cursor-pointer'>
          <span className='text-white'>Movie</span>/Match
        </h1>
      </Link>
      <div>
        {/* <Link to='/search'>
          <button className='text-white pr-4'>Discover</button>
        </Link> */}
        <Link to='/login'>
          <button className='text-white pr-4'>Sign In</button>
        </Link>
        {/* <Link to='/signup'>
          <button className='bg-black bg-opacity-80 px-3 py-2 rounded-full cursor-pointer text-white hover:bg-black'>
            Sign Up
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
