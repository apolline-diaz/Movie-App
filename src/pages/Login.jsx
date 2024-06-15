import React from "react";
import Background from "../assets/background.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='absolute w-full h-full object-cover'
          // hidden sm:block
          src={Background}
          alt='/'
        />
        <div className='bg-black/50 fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
          <div className='w-full max-w-[450px] h-auto bg-white text-black rounded-lg'>
            <div className='max-w-[320px] mx-auto py-10'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              <form className='w-full flex flex-col py-4'>
                <input
                  className='p-3 my-2  border border-2-black rounded-full'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  className='p-3 my-2  border border-2-black rounded-full'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-pink-400 hover:bg-pink-300 py-3 my-6 rounded-full font-bold'>
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input
                      className='mr-2 hover:cursor-pointer'
                      type='checkbox'
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8 space-x-2 gap-2'>
                  <span className='text-gray-600'>New to Movie/Match?</span>

                  <strong>
                    <Link to='/signup'>Sign Up</Link>
                  </strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
