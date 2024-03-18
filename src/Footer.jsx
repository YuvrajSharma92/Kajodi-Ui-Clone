import React, { useState } from 'react'
export default function Footer() {
   
  return (
    <>


   
      // <hr className='mt-5 py-4'></hr>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-[30px]'>
        <div className=' w-[90%]'>
          <h2 className='text-[20px] font-semibold'>About our store</h2>
          <p className='py-3 font-semibold text-gray-500'>Welcome to kajodi.com, your number one source for all things of women's wear cloths. we're dedicated to giving you the best of women's wear cloths, with a focus on quality, fast shipping, customer support.</p>
          <p className='py-3 font-semibold text-gray-500'>Kajodi brand founded in 2021 by us, kajodi brand has come a long way from its beginnings in jaipur. we hope you enjoy our products as much as we enjoy offering them to you. if you have any questions or comments, please don't hesitate to contact us at hello@kajodi.com.</p>

        </div>
        <div className='w-[90%]'>
          <h1></h1>
          <h1 className='font-semibold pl-5'>Quick Link</h1>
          <ul className='p-7 leading-7 font-semibold cursor-pointer text-gray-500 gap-10'>
            <li className='hover:text-black  '>Home</li>
            <li className='hover:text-black'>My Account</li>
            <li className='hover:text-black'>Size Guide</li>
            <li className='hover:text-black'>New Arrivals</li>
            <li className='hover:text-black'>Return & Exchange</li>
            <li className='hover:text-black'>Contact Us</li>
            <li className='hover:text-black'>FAQs</li>
            <li className='hover:text-black'>Privacy Policies</li>
            <li className='hover:text-black'>Shipping Policies</li>
            <li className='hover:text-black'>Terms & Conditions</li>
          </ul>
        </div>

        <div className='w-[80%]'>
          <h1 className='font-semibold'>Newsletter</h1>
          <p className='text-gray-600 pt-4'>Sign up to our newsletter to receive exclusive offers.</p>
          <input className='w-[80%] p-3 rounded-xl my-3 border-[1px] border-solid  border-gray-500 outline-none' type="search" name="" id="" placeholder='E-mail' />
          <button className='bg-pink-600 p-3 px-9 rounded-xl hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500 duration-300'>Subscribe</button>
        </div>

        <div className=' w-[80%] h-[50px] flex justify-around'>

          <div className='w-[15%] flex items-center justify-center text-[21px] hover:text-pink-500'>
            <i class="bi bi-instagram"></i>
          </div>
          <div className='w-[15%] flex items-center justify-center hover:text-pink-500 text-[22px]'>
            <i class="bi bi-facebook"></i>
          </div>
          <div className='w-[15%] flex items-center justify-center text-[22px] hover:text-pink-500'>
            <i class="bi bi-whatsapp"></i>
          </div>
          <div className='w-[15%] flex items-center justify-center text-[22px] hover:text-pink-500'>
            <i class="bi bi-youtube"></i>
          </div>
          <div className=' w-[15%] flex items-center justify-center text-[21px] hover:text-pink-500'>
            <i class="bi bi-twitter-x"></i>
          </div>
        </div>
      </div>

    </>
  )
}
