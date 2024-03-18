import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
   <>
   
<div className='bg-fuchsia-400 w-full h-[50px] text-center py-3 text-white font-bold'>
  <marquee direction="top">Millennium Happy Customer</marquee>
</div>
<nav class="bg-gray-100 py-2 sticky top-0 z-[4]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735683/kajodi-logo_sd1xhk.avif" className="h-16 pt-4" alt="" />
   <button
   onClick={()=>{
    setOpen(!open)
   }}
   >

   <i className={`md:hidden text-[34px] bi bi-${
    open ? "x" : "list"
   }`}>

   </i>
   </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
        <Link to={"/"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/" ? "text-blue-600" :"text-black"
          }`}>Home</a>
        </Link>
        <Link to={"/about"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/about" ? "text-blue-600" :"text-black"
          }`}>About</a>
        </Link>
        <Link to={"/contact"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/contact" ? "text-blue-600" :"text-black"
          }`}>Contact</a>
        </Link>
        <Link to={"/product"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/product" ? "text-blue-600" :"text-black"
          }`}>Product</a>
        </Link>
        <Link to={"/MyAccount"}>
        <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/MyAccount" ? "text-blue-600" :"text-black"
          }`}>Login</a>
        </Link>
      </ul>
    </div>

    <div className={`w-full ${open? "block" : "hidden"}`}>
      <ul class="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
        <Link to={"/"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/" ? "text-blue-600" :"text-black"
          }`}>Home</a>
        </Link>
        <Link to={"/about"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/about" ? "text-blue-600" :"text-black"
          }`}>About</a>
        </Link>
        <Link to={"/contact"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/contact" ? "text-blue-600" :"text-black"
          }`}>Contact</a>
        </Link>
        <Link to={"/product"}>
          <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/product" ? "text-blue-600" :"text-black"
          }`}>Product</a>
        </Link>
        <Link to={"/MyAccount"}>
        <a href="#" className={`block py-2 px-3 md:p-0 ${
            location == "/MyAccount" ? "text-blue-600" :"text-black"
          }`}>Login</a>
        </Link>
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}
