import React, {useState} from 'react'
import '../style/Singup.css'
import Goolge from '../assets/google.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Singup = () => {
  const [values, SetValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/Singup', values)
    .then(res => {
      if(res.data.Status === "Success"){
        navigate('/Login')
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }

  return (
    <section id='Singup'>
    <div className="singup-container">
      <div className="singup-grid">
        <div className="singup-title">
          <h1><b>Sing up</b></h1>
          <p>Continue With : <img src={Goolge} alt="" />or</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="singup-nama">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" 
          onChange={e => SetValues({...values, name: e.target.value})}/>
        </div>
        <div className="singup-email">
          <label>Email:</label>
          <input type="text" placeholder="Enter your email"
          onChange={e => SetValues({...values, email: e.target.value})}/>
        </div>
        <div className="singup-password">
          <label>Password:</label>
          <input type="password"placeholder="Enter your password"
          onChange={e => SetValues({...values, password: e.target.value})}/>
        </div>
        <div className="singup-button">
          <button>Sing up</button>
        </div>
        
        <div className="singup-signup">
          <p>Don't have an account? <a href="Login">Log in</a></p>
        </div>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Singup