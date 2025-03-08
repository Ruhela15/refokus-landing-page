import React from 'react';
import Button from './Button';

function Product({val ,mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white cursor-pointer hover:bg-red-500 transition-all duration-75'>
      <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
        <div className='dets w-1/3'>
          <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel est ac turpis finibus feugiat. Sed vel est ac turpis finibus feugiat. Sed vel est ac turpis finibus feugiat.</p>
          <div className='flex gap-5 items-center'>
          {val.live && <Button title='get started'/>}
          {val.case&& <Button title='case study'/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

