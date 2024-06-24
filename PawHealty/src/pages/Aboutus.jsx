import React from 'react'
import Footer from '../components/Footer.jsx'
import Imgabout from '../assets/imgabout.png'
import '../style/About.css'
import Navbarw from '../components/Navbarw.jsx'

const Aboutus = () => {
  return (
    <>
    <div>
      <Navbarw />
      </div>
    <section id='bio'>
      <div className="text">
        <h1><b>About Me</b></h1>
      </div>
    </section>
      
    <section className="home">
        <div className="home-left">
          <p>Ilmu terbaik yang kami miliki sebagai modal untuk memperlakukan
            <br />hewan peliharaan Anda dengan kasih sayang dan cinta adalah pengalaman.
            <br />Srijan Vetcare Clinic telah melayani Anda selama lebih dari dua belas tahun,
            didukung<br />oleh Srijan Pet Service,yang telah hadir untuk memenuhi kebutuhan dan
            kebutuhan hewan<br />peliharaan Anda dengan kualitas terbaik.
            <br />
            <br />
            Klien kami adalah anggota masyarakat, pemilik, pecinta, dan partner hewan,
            <br />yang berhak atas pelayanan terbaik untuk teman hidup paling setia mereka.
            <br />Mereka adalah aset terpenting yang dimiliki oleh kami.
            <br />
            <br />
            Dengan menyediakan tempat kerja yang nyaman dan memiliki peralatan dan alat
            medis terkini,<br />kami terus memperbaiki dan mengembangkan staf kami untuk selalu memberikan
            layanan <br />yang lebih baik kepada pelanggan kami.
            <br />
          </p>
      </div>

        <div className="home-right">
            <img src={Imgabout} alt=""/>
        </div>
    </section>

      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Aboutus
