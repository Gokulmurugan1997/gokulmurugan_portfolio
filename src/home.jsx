import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  return <div className='container'>
    <Navbar/>
    <div className='container1'>
    <div className='drop-text'>
    <div className='container2'>
      <h1>Hi</h1>
      <h1>I'm Gokulmurugan</h1>
      <h2>Developer</h2>
      <div className='resume jumping-content'>
          <a href="https://drive.google.com/file/d/12zMA62dJlEF_aOkXBX4w8r2BvozqTSbS/view?usp=drivesdk" target='_blank'>
          Resume{' '}
          <i className="fa-solid fa-download" style={{color: "#f9fbfb"}}>
            </i>
            </a>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
  </div>
}

export default Home