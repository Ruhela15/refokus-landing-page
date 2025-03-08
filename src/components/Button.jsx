import React from 'react'
import { GiCandlebright } from "react-icons/gi";
function Button({title = "Activated"}) {
  return (
    <div className=' max-w-40 px-4 py-2 rounded-full bg-zinc-100 text-red-600 flex items-center justify-between border-b-[1px] border-zinc-700'>
    <span className='text-sm font-medium '>{title}</span>
    <GiCandlebright/>
    </div>
  )
}

export default Button
