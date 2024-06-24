import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import NavbarAfter from '../components/NavbarAfter.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Booktime.css'
import Dr1 from '../assets/dr1.png'

const Booktime = () => {
  const [time, setTime] = useState('10:00');

  return (
    <>
    <div>
      <NavbarAfter/>
    </div>
    <section id='Booktime'>
    <div className="time">
        <h5><b>Book Appointment</b></h5>
        </div>
        <div className="time-container">
      <div className="time-grid">
        <div className="time-left">
            <img src={Dr1} alt="" />
            <p>Rp. 50.000 <br />
          <b>DRH. Sri January</b><br />
          <span><b>Practice schedule : </b></span>08.00 - 20.00 <br />
          <span><b>Practice Place : </b></span>Batam Centre <br />
          <span><b>Experience : </b></span>5 years
          </p>
        </div>
        <div className="time-right">
        <TimePicker
            onChange={setTime}
            value={time}
            className="time-picker"
            disableClock={true}
            format="h:mm a"
            hourPlaceholder="hh"
            minutePlaceholder="mm"
            clearIcon={null}
          />
          
        </div>
        <a href="Bookfix"><button className="btntime">Next</button></a>
      </div>
      </div>
    </section>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Booktime