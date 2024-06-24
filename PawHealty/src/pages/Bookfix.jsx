import React, { useState } from 'react';
import NavbarAfter from '../components/NavbarAfter.jsx'
import Footer from '../components/Footer.jsx';
import '../style/Bookfix.css';
import Dr1 from '../assets/dr1.png';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Bookfix = () => {
  const[values, SetValues] = useState({
    name: '',
    nophone: '',
    email: '',
    type: '',
    namepet: '',
    gender: '',
    ras: '',
    age: '',
    weight: '',
    complaint: ''
  });

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name === "" || values.nophone === "" || values.email === "" || values.type === "" || values.namepet === "" || values.gender === "" || values.ras === "" || values.age === "" || values.weight === "" || values.complaint === "" ){
      alert("Data is empty")
      return
    } 
    axios.post('http://localhost:5000/Bookfix', values)
    .then(res => {
      if(res.data.Status === "Success"){
        alert("Succes Booking")
        navigate('/Afterlogin')
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }

  return (
    <>
      <div>
        <NavbarAfter />
      </div>
      <section id='Bookfix'>
        <div className="fix">
        <h5><b>Book Appointment</b></h5>
        </div>
        <div className="bookfix-container">
          <div className="bookfix-grid">
            <div className="bookfix-left">
              <img src={Dr1} alt="" />
              <p>Rp. 50.000 <br />
                <b>DRH. Sri January</b><br />
                <span><b>Practice schedule : </b></span>08.00 - 20.00 <br />
                <span><b>Practice Place : </b></span>Batam Centre <br />
                <span><b>Experience : </b></span>5 years
              </p>
            </div>
            <div className="bookfix-right">
                <div className="fix-right">
                    <h5><b>Bill Detail</b></h5>
                </div>
              <form onSubmit={handleSubmit}>
                <label>
                  Name <br />
                  <input type="text" name="name" placeholder='Full name'
                  onChange={e => SetValues({...values, name: e.target.value})} required />
                </label>
                <label>
                  No Phone: <br />
                  <input type="text" name="nophone" placeholder='No Phone' 
                  onChange={e => SetValues({...values, nophone: e.target.value})} required />
                </label>
                <label>
                  Email: <br />
                  <input type="email" name="email" placeholder='Email' 
                  onChange={e => SetValues({...values, email: e.target.value})} required />
                </label>
                <label>
                  Pet type: <br />
                  <input type="text" name="type" placeholder='Pet Type'
                  onChange={e => SetValues({...values, type: e.target.value})} required />
                </label>
                <label>
                  Pet name: <br />
                  <input type="text" name="namepet" placeholder='Pet Name'
                  onChange={e => SetValues({...values, namepet: e.target.value})} required />
                </label>
                <label>
                  Pet Gender: <br />
                  <input type="text" name="gender" placeholder='Pet Gender'
                  onChange={e => SetValues({...values, gender: e.target.value})} required />
                </label>
                <label>
                  Breeds: <br />
                  <input type="text" name="ras" placeholder='Ras'
                  onChange={e => SetValues({...values, ras: e.target.value})} required />
                </label>
                <label>
                  Age: <br />
                  <input type="text" name="age" placeholder='Pet Age'
                  onChange={e => SetValues({...values, age: e.target.value})} required />
                </label>
                <label>
                  Weight: <br />
                  <input type="text" name="weight" placeholder='Weight'
                  onChange={e => SetValues({...values, weight: e.target.value})} required />
                </label>
                <label>
                  Complaint: <br />
                  <input type="text" name="complaint" placeholder='Complaint' 
                  onChange={e => SetValues({...values, complaint: e.target.value})} required />
                </label>
                <button className="btnfix">Submit</button>
              </form>
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

export default Bookfix;
