import React from 'react'

const Footer: React.FC = () => {
  return (
    <div  className='flex flex-col items-center bg-white mt-32  h-56 gap-16'>
      <div className='mt-6'>
        <h1 className='text-7xl font-bold'>
          Dream
        </h1>
      </div>

      <div className='flex gap-4'>
      <div>
        <img
        className=''
        src='../imgs/FB-logo.svg'
        alt='Facebook logo'
        />
      </div>
      <div>
      <img
        className=''
        src='../imgs/youtube-logo.svg'
        alt='youtube logo'
        />
      </div>
      <div>
      <img
        className=''
        src='../imgs/twitter-logo.svg'
        alt='twitter-logo'
        />
      </div>
    </div>

    </div>
  )
}

export default Footer