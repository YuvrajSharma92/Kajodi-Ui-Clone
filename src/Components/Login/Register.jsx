import React from 'react'
export default function Register() {
  return (
    <>
    <div>
        <h1 className='font-semibold text-4xl text-center mt-10'>Register</h1>
        <p className='text-center font-bold py-4'>Please fill in the information below:</p>
        <div className='flex justify-center items-center w-[100%]'> 
     <div className='w-[70%] sm:w-[40%] md:w-[30%]'>
     <input type="email" required="E-mail" placeholder='First name'  className='font-semibold p-2 rounded-2xl w-[100%] h-[47px] border-[1px] border-gray-500 outline-none m-4'/>

     <input type="text" placeholder='Last name' className='font-semibold p-2 rounded-2xl w-[100%] h-[47px] border-[1px] border-gray-500 outline-none m-4'/>

     <input type="E-mail" placeholder='E-mail' className='font-semibold p-2 rounded-2xl w-[100%] h-[47px] border-[1px] border-gray-500 outline-none m-4'/>

     <input type="Password" placeholder='Password' className='font-semibold p-2 rounded-2xl w-[100%] h-[47px] border-[1px] border-gray-500 outline-none m-4'/>

     <button className='bg-pink-400 text-white p-3 px-8 rounded-2xl hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500 duration-500 w-[100%] m-4 tracking-wide'>Create account</button>

     </div>


     </div>
    </div>
    </>
  )
}
