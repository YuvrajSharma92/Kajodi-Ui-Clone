import React from 'react'
import { Link, useLocation } from 'react-router-dom';
export default function MyAccount() {
  const location = useLocation().pathname;
  // console.log(useLocation);

  return (
    <>
    <div className='py-10'>
     <h1 className='text-center text-4xl font-bold mt-5'>Login</h1>
     <p className='text-center font-semibold p-4'>Enter your email and password to login:</p>
     <div className='flex justify-center items-center w-[100%]'> 
     <div className='w-[70%] sm:w-[40%] md:w-[30%]'>
     <input type="email" placeholder='E-mail' required className='font-semibold p-2 rounded-2xl w-[100%] h-[50px] border-[1px] border-gray-500 outline-none m-4'/>

     <input type="Password" placeholder='Password' className='font-semibold p-2 rounded-2xl w-[100%] h-[50px] border-[1px] border-gray-500 outline-none m-4'/>

     <button className='bg-pink-400 text-white p-3 px-8 rounded-2xl hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500 duration-500 w-[100%] m-4'>
     <Link to={"/register"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "register" ? "text-blue-600" :""
          }`}>Login</a>
        </Link></button>

     </div>


     </div>
    </div>
    </>
  )
}
