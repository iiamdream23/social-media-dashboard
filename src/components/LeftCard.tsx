import React from 'react'

const LeftCard: React.FC = () => {
  return (
    <div className='h-96 w-80 flex items-center rounded-l-3xl bg-blue-200 shadow-2xl'>
      <div className='flex flex-col items-center space-y-12'>
        <h1 className='font-poppins text-5xl'>
          Left Card
        </h1>
        <p className='font-mono text-center px-3'>
          This Left Card will contain details of the spartial difference between a warm-hole and a blackbody.
        </p>
        <button className='h-10 w-20 rounded-l-xl hover:bg-blue-100 shadow'>
          Go
        </button>
      </div>
    </div>
  )
}

export default LeftCard