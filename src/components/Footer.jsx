import React from 'react'

export const Footer = () => {
  return (
    <div className='flex bg-zinc-700 mt-10 p-10 justify-between w-full'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-3xl text-white'>Have an idea?</h2>
        <h3 className='text-2xl text-zinc-300'>Let's talk about it</h3>
      </div>
      <div className='flex items-center gap-5'>
        <h3 className='text-xl text-zinc-300'>Subscribe to my newsletter <span><i className="bi bi-arrow-right"></i></span></h3>
        <label htmlFor="newsletter" className='text-zinc-300'>Email</label>
        <input className="pl-2" type="email" name="newsletter" id="" placeholder='your@email.com' />
      </div>
    </div>
  )
}
