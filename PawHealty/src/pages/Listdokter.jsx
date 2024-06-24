import React from 'react'
import NavbarAfterW from '../components/NavbarAfterW.jsx'
import Footer from '../components/Footer.jsx'
import Dr1 from '../assets/dr1.png'
import Dr2 from '../assets/dr2.png'
import Dr3 from '../assets/dr3.png'
import '../style/Listdokter.css'

const Listdokter = () => {
  return (
    <>
    <div>
      <NavbarAfterW />
      </div>
    <section id='bio'>
      <div className="text">
        <h1><b>Online Consultation</b></h1>
        <p>Chat with the professionals</p>
      </div>
    </section>
      <section id='card'>
      <div className="main-card">
        <h1 className='text-2xl pb-6'><b>Meet Our Veterinarian!</b></h1>
        <div className="card-container">
          <div className="card p-4">
            <img src={Dr1} alt="Veterinarian 1" />
            <p className='text-center py-3'><b>DRH. Sri January</b></p>
            <a href="Bookcal"><button className="btn">Learn More</button></a>
          </div>
          <div className="card p-4">
            <img src={Dr2} alt="Veterinarian 2" />
            <p className='text-center py-3'><b>DRH. Abiv Yanto</b></p>
            <button className="btn">Learn More</button>
          </div>
          <div className="card p-4">
            <img src={Dr3} alt="Veterinarian 3" />
            <p className='text-center py-3'><b>DRH. Yakti Novi</b></p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
      </section>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Listdokter
