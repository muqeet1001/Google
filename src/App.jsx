 import React, { useState } from 'react'
 import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';
export default function App() {
  //const [darkTheme ,setDarkTheme] = useState(false);
   return (
     <div >
      <div className='bg-gray-300  min-h-screen'>
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>

     </div>
   )
 }
 