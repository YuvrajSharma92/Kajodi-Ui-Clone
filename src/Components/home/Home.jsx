import React, { useState } from 'react'
// import Swiper from './Layout/Swiper'
import SwiperSlider from '../Layout/Swiper'

export default function Home() {

  return (
    <>
    <SwiperSlider/>
    {/*  */}
    <h1 className='py-8 text-center text-4xl font-bold cursor-pointer text-pink-600 underline'>Exclusive Indo-Western Collection.</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
         <div className=''>
          <div className='rounded-lg'>
            <img className='w-[100%] h-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735670/kajodi-1_fmiexp.webp" alt="" />
          </div>
         <h5 className='p-1 text-center font-bold'>Celina Green Dress</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
    
         <div className=''>
          <div className='rounded-lg'>
         <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735670/kajodi-3_x5dzgm.webp" alt="" />
         </div>
         <h5 className='p-1 text-center font-bold'>White Indo Long Gown Dress</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'> Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg '>
           <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735670/kajodi-2_gfhast.webp" alt="" />
            </div>
            <h5 className='p-1 text-center font-bold'>Jesmin Cotton Tai-dye Long Dress..</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg'>
          <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735671/kajodi-4_zqfwgc.webp" alt="" />
            </div>
            <h5 className=' text-center font-bold'>Sparkly Black Long Dress.</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
     </div>
     {/*  */}

     {/*  */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
         <div className=''>
          <div className='rounded-lg'>
            <img className='w-[100%] h-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735675/kajodi-8_ngsjgl.webp" alt="" />
          </div>
         <h5 className='p-1 text-center font-bold'>Rangoli Chiffon Long Dress</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
    
         <div className=''>
          <div className='rounded-lg'>
         <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735674/kajodi-6_tkzypt.webp" alt="" />
         </div>
         <h5 className='p-1 text-center font-bold'>Sunshine Green Floral Dress With Dupatta (2 Nos in 1 Set)</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'> Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg '>
           <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735677/kajodi-12_bzz55b.webp" alt="" />
            </div>
            <h5 className='p-1 text-center font-bold'>Joya Floral Organza Long Dress Set</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg'>
          <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735674/kajodi-7_eteoiw.webp" alt="" />
            </div>
            <h5 className=' text-center font-bold'>Haldi Ceremony Traditional Dress Set.</h5>
            <p className='p -1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
     </div>
     <div className='items-center justify-center flex text-white '>
         <button className='bg-pink-600 p-3 px-8 rounded-xl hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500 duration-500'>View all</button>
         </div>
     {/*  */}


     {/*  */}
     <h1 className='text-pink-600 text-center text-4xl py-4 mt-7 font-bold underline'>Exquisite Kurta Range.</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
         <div className=''>
          <div className='rounded-lg overflow-hidden'>
            <img className='w-[100%] h-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735687/lehenga-6_jlswhv.webp" alt="" />
          </div>
         <h5 className='p-1 text-center font-bold'>Rangoli Chiffon Long Dress</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg overflow-hidden'>
         <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735687/lehenga-5_avxgcy.webp" alt="" />
         </div>
         <h5 className='p-1 text-center font-bold'>Sunshine Green Floral Dress With Dupatta (2 Nos in 1 Set)</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'> Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg overflow-hidden '>
           <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735687/lehenga-7_dfrlq6.webp" alt="" />
            </div>
            <h5 className='p-1 text-center font-bold'>Joya Floral Organza Long Dress Set</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg overflow-hidden'>
        <img onMouseOver={true} className='w-[100%] rounded-xl hover:scale-110 duration-300' src={`https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735683/kajodi-box-1_bi7wdq.webp`}  alt="" />
            </div>
            <h5 className=' text-center font-bold'>Haldi Ceremony Traditional Dress Set.</h5>
            <p className='p -1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
     </div>
     <div className='items-center justify-center flex text-white '>
         <button className='bg-pink-600 p-3 px-8 rounded-xl hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500 duration-500'>View all</button>
         </div>
         {/*  */}

         {/*  */}
    <h1 className='py-8 text-center text-4xl font-bold cursor-pointer text-pink-600 underline'>Traditional Sarees in Modern Designs..</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
         <div className=''>
          <div className='rounded-lg'>
            <img className='w-[100%] h-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735676/kajodi-9_us0ozu.webp" alt="" />
          </div>
         <h5 className='p-1 text-center font-bold'>Pink Floral Chiffon Saree</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg'>
         <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735676/kajodi-10_vqm8vv.webp" alt="" />
         </div>
         <h5 className='p-1 text-center font-bold'>Panihari Draped Chiffon Saree Set</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,500.00</span> <del className='font-normal'> Rs. 3,000.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg '>
           <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735677/kajodi-13_sjjy2k.webp" alt="" />
            </div>
            <h5 className='p-1 text-center font-bold'>Pink High Neck Cropped saree.</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 3,000.00</span> <del className='font-normal'>Rs. 4,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg'>
          <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735677/kajodi-11_olioar.webp" alt="" />
            </div>
            <h5 className=' text-center font-bold'>Yellow Haldi Ceremony Saree Set.</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,399.00</span> <del className='font-normal'>Rs. 3,124.00</del></p>
         </div>
     </div>
     {/*  */}

     {/*  */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
         <div className=''>
          <div className='rounded-lg'>
            <img className='w-[100%] h-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735689/saree-1_mv6tic.webp" alt="" />
          </div>
         <h5 className='p-1 text-center font-bold'>Pink Dark Kajodi Cotton Embroidery Kurta with Pant(2 Nos in 1 Set)</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,000.00</span> <del className='font-normal'>Rs. 4,124.00</del></p>
         </div>
    
         <div className=''>
          <div className='rounded-lg'>
         <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735690/saree-2_gx1aaf.webp" alt="" />
         </div>
         <h5 className='p-1 text-center font-bold'>Blue Bandhej Kurta Set</h5>
         <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 3,500.00</span> <del className='font-normal'> Rs. 5,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg '>
           <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735691/saree-5_avkttu.webp" alt="" />
            </div>
            <h5 className='p-1 text-center font-bold'>Mustard Organza Hand Work Maskali Long Dress with Dupatta</h5>
            <p className='p-1 font-bold text-center'><span className='text-red-500'>Rs. 2,499.00</span> <del className='font-normal'>Rs. 4,124.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg'>
        <img className='w-[100%] rounded-xl' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735691/saree-6_jrtlzu.webp"  alt="" />
            </div>
            <h5 className=' text-center font-bold'>Kiya Organza Long Dress.</h5>
            <p className='p -1 font-bold text-center'><span className='text-red-500'>Rs. 3,259.00</span> <del className='font-normal'>Rs. 4,124.00</del></p>
         </div>
     </div>
     <div className='items-center justify-center flex text-white '>
         <button className='bg-pink-600 p-3 px-8 rounded-xl hover:bg-white hover:border-solid border-[1px] border-pink-500 hover:font-bold hover:text-pink-500 duration-500'>View more</button>
         </div>
     {/*  */}      
      <h1 className='py-8 text-center text-4xl font-bold cursor-pointer text-pink-600 underline'>Exclusive Indo-Western Collection.</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
         <div className=''>
          <div className='rounded-xl overflow-hidden'>
          <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735672/kajodi-5_lmxqmp.webp" alt="" className='w-[100%] rounded-xl hover:scale-110 duration-300' />
          </div>
          <h1 className='text-center font-bold'>Mustard Organza Hand Work Maskali Long Dress with Dupatta</h1>
          <p className='text-red-600 text-center font-semibold' >Rs.3,499.00 <del className='text-gray-500'>Rs.4,500.00</del></p>
         </div>
    
         <div className=''>
          <div className='rounded-lg overflow-hidden'>
         <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735682/kajodi-20_plqxp7.webp" alt="" />
         </div>
         <h1 className='text-center font-bold'>Mustard Organza Hand Work Maskali Long Dress with Dupatta</h1>
          <p className='text-red-600 text-center font-semibold'>Rs.3,499.00 <del className='text-gray-500'>Rs.4,500.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg overflow-hidden'>
           <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735683/kajodi-19_f7cmlc.webp" alt="" />
            </div>
            <h1 className='text-center font-bold'>Mustard Organza Hand Work Maskali Long Dress with Dupatta</h1>
          <p className='text-red-600 text-center font-semibold'>Rs.3,499.00 <del className='text-gray-500'>Rs.4,500.00</del></p>
         </div>
         <div className=''>
          <div className='rounded-lg overflow-hidden'>
          <img className='w-[100%] rounded-xl hover:scale-110 duration-300' src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735689/saree-1_mv6tic.webp" alt="" />
            </div>
            <h1 className='text-center font-bold'>Mustard Organza Hand Work Maskali Long Dress with Dupatta</h1>
          <p className='text-red-600 text-center font-semibold'>Rs.3,499.00 <del className='text-gray-500'>Rs.4,500.00</del></p>
         </div>
     </div>
     {/*  */}

   </>
  )
}