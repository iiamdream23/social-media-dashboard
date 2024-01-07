import React from 'react'
import Header from './components/Header'
import LeftCard from './components/LeftCard'
import RightCard from './components/RightCard'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className=' bg-gray-100'>
      {/* Header */}
      <div className='pt-32 mx-20'>
        <Header />
      </div>
      {/* Cards */}
      <div className='pt-32 gap-8 flex justify-center'>
        {/* Left Card */}
        <div>
        <LeftCard />
        </div>
        {/* Right Card */}
        <div>
          <RightCard />
        </div>
      </div>
      {/* Footer */}
      <div className=''>
        <Footer />
      </div>
      
    </div>
  )
}

export default App