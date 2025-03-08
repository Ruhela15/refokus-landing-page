import React from 'react';

function Stripe({val}) {
  return (
    <div className='w-[16.66%] flex justify-between items-center  p-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600'>
      <img src={val.url} alt="Logo" className='w-20 h-12 object-contain' />
      <span className='font-semibold'>{val.number}</span>
    </div>
  );
}

export default Stripe;
