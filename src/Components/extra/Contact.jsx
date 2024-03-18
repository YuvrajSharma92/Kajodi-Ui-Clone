import React from 'react'

export default function Contact() {
  return (
    <>
    <h1 className='text-center text-4xl pt-[40px] font-bold p-8'>Contact</h1>
    <div className=' flex flex-col gap-4 py-7'>
      <div className='items-center justify-center flex gap-6'>
       <input className=' w-[24%] h-[50px] rounded-2xl border-solid border-[1px] border-gray-500 p-2' type="text"placeholder='Name'/>
       <input className='w-[24%] h-[50px] rounded-2xl border-solid border-[1px] border-gray-500 p-2' type="text"placeholder='E-mail'/>
    </div>
    <div className='items-center justify-center flex gap-6'>
       <input className=' w-[24%] h-[50px] rounded-2xl border-solid border-[1px] border-gray-500 p-2' type="text"placeholder='Abb:-'/>
       <input className='w-[24%] h-[50px] rounded-2xl border-solid border-[1px] border-gray-500 p-2' type="text"placeholder='No: 91+ '/>
    </div>
    <div className='items-center justify-center flex p-3 '>
     <textarea className='rounded-2xl p-2 border-solid border-[1px] border-gray-500' name="" id="" cols="88" rows="5" placeholder='Message'></textarea>
    </div>
    <div  className='items-center justify-center flex'>
      <input className='items-center justify-center ' type="checkbox" name="" id="" />
      <p className=''>By submitting this form, you confirm that you have read and agree to our Terms of Service</p>
    </div>
    <div className='flex items-center justify-center text-white font-bold'>
    <button className='bg-pink-500 w-[50%] items-center justify-center flex rounded-2xl p-3  hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500'>Send message</button>
    </div>
    </div>
    </>
  )
}
