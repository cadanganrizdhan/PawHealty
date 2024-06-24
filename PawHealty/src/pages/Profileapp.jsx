import React from 'react'
import Navbarw from '../components/Navbarw.jsx'
import Footer from '../components/Footer.jsx'
import Profil from '../components/Profil.jsx'
import '../style/Profileapp.css'
import dr1 from "../assets/dr1.png";

const Profileapp = () => {
  return (
    <>
    <div>
      <Navbarw />
      </div>
      <section id='profil-app-bio'>
      <div className="profil-app-text">
        <h1><b>Profil</b></h1>
      </div>
    </section>
      <div>
        <Profil/>
      </div>

      <section id="profil-post-bio">
      <div className="text-post">
        <img src={dr1} alt="" />
        <h1><b>Bagus Khafi</b></h1>
        <h2>20/01/2024</h2>
        <br />
        <p>Online Consultation <b>drh.Yakti novi</b><br /><b>drh.Yakti novi</b>
        <br /> Date : May 10, 2024 Time : 08:00 </p>
      </div>
      <div className="post-actions">
        <div className="under">
        <span className="post-icon">👍</span>
        <span className="post-icon">💬</span>
        </div>
      </div>
    </section>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Profileapp
