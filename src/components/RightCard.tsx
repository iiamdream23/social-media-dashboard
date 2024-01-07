import React from 'react'

const RightCard: React.FC = () => {
  return (
    <div className='h-96 w-80 flex items-center rounded-r-3xl bg-blue-200 shadow-2xl'>
      <div className='flex flex-col items-center space-y-12'>
        <h1 className='font-poppins text-5xl'>
          Right Card
        </h1>
        <p className='font-mono text-center px-3'>
          This right card has no details. Although the concept of time and how the entity is persived still remains a shoker.
        </p>
        <button className='h-10 w-20 rounded-r-xl hover:bg-blue-100 shadow'>
          Come
        </button>
      </div>
    </div>
  )
}

export default RightCard