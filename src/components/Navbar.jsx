import React from 'react';
import Logo from '../assets/logo.png';
import Button from './Button';
function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-2 border-zinc-700'>
      <div className='nleft flex items-center'>
      <img 
        src={Logo}
        alt='Logo' 
        className='h-10 opacity-75 mr-8'
      />
      <div className='links flex gap-14 ml-20'>
        {["Home", "Works", "Culture", "", "News"].map((elem, index) => (
          elem.length === 0 ? (
            <div key={index} className='w-[2px] h-6 bg-zinc-600'></div>
          ) : (
            <a 
              key={elem} 
              className='font-regular text-sm text-white hover:text-gray-400 flex items-center gap-2' 
              href='#Product.jsx'
            >
              {index === 1 && (
                <span 
                  style={{ boxShadow: "0 0 0.56em #00FF19" }} 
                  className='bg-green-500 rounded-full inline-block w-2 h-2'
                ></span>
              )}
              {elem}
            </a>
          )
        ))}
      </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;



