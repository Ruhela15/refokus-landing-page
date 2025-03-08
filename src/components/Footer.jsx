import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <div className='max-w-screen-xl mx-auto py-10 px-5 flex flex-col lg:flex-row gap-16 lg:gap-32'>
    
        <div className='flex-1'>
          <h1 className='text-[10rem] leading-none tracking-tighter flex flex-row'>
            <span className='text-red-700'>T</span>ony-
            <span className='text-red-700'>S</span>tark
          </h1>
        </div>
  
        <div className='flex-1 flex flex-col lg:flex-row gap-10'>
          <div className='flex-1'>
            <h4 className='mb-5 text-zinc-400'>Social</h4>
            {["facebook", "twitter", "instagram", "linkedin"].map((item, index) => (
              <a key={index} href='#' className='block mt-3 text-zinc-600 capitalize hover:text-white'>
                {item}
              </a>
            ))}
          </div>
          <div className='flex-1'>
            <h4 className='mb-5 text-zinc-400'>Movies</h4>
            {["iron-man", "iron-2", "iron-3", "avenger-Begin"].map((item, index) => (
              <a key={index} href='#' className='block mt-3 text-zinc-600 capitalize hover:text-white'>
                {item}
              </a>
            ))}
          </div>
          <div className='flex-1 flex flex-col items-end text-right'>
            <p className='text-zinc-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img 
              src='https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp' 
              className='w-48 mt-10' 
              alt='Premium Partner Badge'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

