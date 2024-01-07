import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='h-44 flex rounded-full bg-blue-200 shadow-2xl'>
      <div className='font-poppins flex items-center ml-12 text-xl hover:font-normal text-black cursor-pointer'>
        Input Logo
      </div>
      <div className='mt-16 mx-16'>
      <div className=''>
        <div className='flex gap-4'>
        <div className='flex bg-white p-3 px-4 rounded-2xl'>
        <input
        className=''
        type='text'
        placeholder='search site'
        />
        <img
        className='hover:cursor-pointer'
        src='../imgs/search1.svg' alt='SearchIcon' />
        </div>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Header