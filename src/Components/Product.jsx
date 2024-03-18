import React from 'react'

export default function Product() {
  return (
    <>
      <h1 className='text-center text-4xl text-red-500 underline py-6'>Products 6</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-[30px]'>
        <div className=''>
          <div className='w-[100%] p-6'>
            <h1 className='text-2xl overflow-hidden'>Size</h1>
            <ul className='text-gray-500 text-[18px] leading-9 cursor-pointer'>
              <li>XS (10)</li>
              <li>S (10)</li>
              <li>M (10)</li>
              <li>L (10)</li>
              <li>XL (10)</li>
              <li>2XL (10)</li>
              <li>3XL (10)</li>
              <li>4XL (10)</li>
              <li>5XL (10)</li>
            </ul>
          </div>
        </div>
        <div className=''>
          <div className='rounded-lg overflow-hidden'>
            <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735686/lehenga-3_ec9pth.webp" alt="" />
          </div>
        </div>
        <div className=''>
          <div className='rounded-lg overflow-hidden '>
            <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735684/lehenga-2_oeksa2.webp" alt="" />
          </div>
        </div>
        <div className=''>
          <div className='rounded-lg overflow-hidden'>
            <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735686/lehenga-4_utxv2f.webp" alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-[30px]'>
        <div className=''>
          <div className='w-[100%] p-6'>
            <h1 className='text-2xl overflow-hidden'>Price</h1>
            <ul className='text-gray-500 text-[16px] leading-9 cursor-pointer'>
              <li className='text-red-500'>Rs. 4,750.00  <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
              <li className='text-red-500'>Rs. 4,750.00 <del className='text-gray-600'>Rs. 7,125.00</del></li>
            </ul>
          </div>
        </div>
        <div className=''>
          <div className='rounded-lg overflow-hidden'>
            <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735690/saree-3_xfelcp.webp" alt="" />
          </div>
        </div>
        <div className=''>
          <div className='rounded-lg overflow-hidden '>
            <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735690/saree-2_gx1aaf.webp" alt="" />
          </div>
        </div>
        <div className=''>
          <div className='rounded-lg overflow-hidden'>
            <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735680/kajodi-18_oxkneb.webp" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
