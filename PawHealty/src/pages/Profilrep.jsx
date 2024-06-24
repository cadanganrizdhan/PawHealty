import React from 'react'
import Navbarw from '../components/Navbarw.jsx'
import Footer from '../components/Footer.jsx'
import Profil from '../components/Profil.jsx'
import '../style/Profilrep.css'
import dr1 from "../assets/dr1.png";

const Profilrep = () => {
  return (
    <>
    <div>
      <Navbarw />
      </div>
      <section id='profil-rep-bio'>
      <div className="profil-rep-text">
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
        <p>Berapa sering  kucing saya perlu ke dokter hewan untuk pemeriksaan rutin?</p>
      </div>
      <div className="post-actions">
        <div className="under5">
        <span className="post-icon">👍</span>
        <span className="post-icon">💬</span>
        </div>
      </div>
    </section>

    <section id="profil-post-bio">
      <div className="text-post">
        <img src={dr1} alt="" />
        <h1><b>Bagus Khafi</b></h1>
        <h2>20/01/2024</h2>
        <br />
        <p>Berapa sering  kucing saya perlu ke dokter hewan untuk pemeriksaan rutin?</p>
      </div>
      <div className="post-actions">
        <div className="under5">
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

export default Profilrep
