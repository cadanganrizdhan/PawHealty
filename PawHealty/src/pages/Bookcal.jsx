import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavbarAfter from '../components/NavbarAfter.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Bookcal.css'
import Dr1 from '../assets/dr1.png'

const Bookcal = () => {
    const [date, setDate] = useState(new Date());

  return (
    <>
    <div>
      <NavbarAfter/>
    </div>
    <section className="mt-[10rem] relative -left-5 mb-9">
        <div className="book-container">
          <div className="book-grid flex flex-col md:flex-row gap-9">
            <div className="book-left">
              <img src={Dr1} alt="" />
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
            <div className="book-right max-w-[40rem]">
              <Calendar onChange={setDate} value={date} className="calendar" />
              <a href="Booktime"><button className="btncal">Next</button></a>
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

export default Bookcal;
