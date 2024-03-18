
import React from 'react'
import Home from './Components/home/Home'
import About from './Components/extra/About'
import Contact from './Components/extra/Contact'
import Product from './Components/Product'
import MyAccount from './Components/Login/MyAccount'
import Register from './Components/Login/Register'
import Lehenga from './Components/home/Lehenga'
import NavBar from './NavBar'
import Footer from './Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route exact path ="/" element ={<Home/>}/>
      <Route exact path ="/about" element ={<About/>}/>
      <Route exact path ="/contact" element ={<Contact/>}/>
      <Route exact path ="/product" element ={<Product/>}/>
      <Route exact path ="/MyAccount" element ={<MyAccount/>}/> 
      <Route exact path = "/register" element ={<Register/>}/>
      <Route exact path = "/lehenga" element ={<Lehenga/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}
