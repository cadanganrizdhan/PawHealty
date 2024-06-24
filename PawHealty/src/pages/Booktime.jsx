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
    <section id="Booktime" className="relative -left-5 pt-11">
        <div className="time">
          <h5>
            <b>Book Appointment</b>
          </h5>
        </div>
        <div className="time-container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="my-5">
              <img src={Dr1} alt="" className="my-5 object-cover" />
              <p>
                Rp. 50.000 <br />
                <b>DRH. Sri January</b>
                <br />
                <span>
                  <b>Practice schedule : </b>
                </span>
                08.00 - 20.00 <br />
                <span>
                  <b>Practice Place : </b>
                </span>
                Batam Centre <br />
                <span>
                  <b>Experience : </b>
                </span>
                5 years
              </p>
            </div>
            <div className=" bg-[#f9f9f9] p-5 my-4 flex flex-col justify-around gap-5">
              <h1 className="font-bold text-xl text-center">Time</h1>
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
              <a href="Bookfix">
                <button className="bg-[#331b3b] ml-auto text-white p-4 text-[1.2rem] mt-5 w-full">
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Booktime;
