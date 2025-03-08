import React from 'react'
import Navbar from './components/Navbar'
import Works from './components/Works'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Maruees from './components/Maruees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-black w-full text-white  font-["satoshi"]'>
    <Navbar/>
    <Works/>
    <Stripes/>
    <Products/>
    <Maruees/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App


