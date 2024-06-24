import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FAQ from '../components/FAQ.jsx'
import Logo1 from '../assets/text1.png'
import mail1 from '../assets/mail.png'
import Logo3 from '../assets/bg3.png'
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import artikel from '../assets/artikel.png'
import forum from '../assets/forum.png'
import loc from '../assets/loc.png'
import konsul from '../assets/konsul.png'
import '../style/Home.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios' 

const BERANDA = () => {

  const[values, SetValues] = useState ({
    name:'',
    email:'',
    message:''
  })

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http:/localhost:5000/BERANDA', values)
    .then(res => {
      if(res.data.Status === "Success"){
        navigate('/BERANDA')
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }

  return (
    <>
    
    <div>
      <Navbar/>
      </div>
        {/* Bagian Beranda */}
      <section id="BERANDA">
        <div className="home-left">
          <img src={Logo1} alt=""/>
          <p>Temukan perawatan kesehatan hewan Anda di sini! Dengan layanan <br />
          online kami, Anda dapat dengan mudah menjadwalkan janji temu <br />
          dengan dokter hewan terpercaya, mencari informasi tentang <br />
          perawatan hewan terkini, dan bergabung dengan komunitas <br />
          pecinta hewan yang peduli</p>
          <a href="BERANDA">
            <button className="btn1">GET STARTED</button>
          </a>
        </div>
        <div className="home-right">
          <img src={""} alt=""/>
            </div>
      </section>

       {/* Bagian Grid */}
      <section id='Grid'>
        <div className="text-grid">
          <h1>What We Do</h1>
          <p>For Yo<span class="under1">ur Pet</span></p>
        </div>
        <div className="grid-left">
          <div className="grid-container">
            <div className="grid-item">
              <img src={artikel} alt="" />
              <a href="Listblog"><h4>Artikel</h4></a>
                <p>The articles here are useful for increasing insight into caring for and improving the welfare of cats and dogs</p>
            </div>
            <div className="grid-item">
              <img src={forum} alt="" />
              <a href="Singup"><h4>Online Consultation</h4></a>
                    <p>An online consultation was created to ask about problems that occur in our cats and dogs</p>
            </div>
            <div className="grid-item">
              <img src={loc} alt="" />
              <a href="Singup"><h4>Vet Vlinic Location</h4></a>
                    <p>Batam city street?</p>
            </div>
            <div className="grid-item">
              <img src={konsul} alt="" />
              <a href="Singup"><h4>Discussion Forum</h4></a>
                    <p>The discussion forum was created to share stories and respond to each other among dog and cat animal lovers</p>
            </div>
          </div>
        </div>
      </section>

       {/* Bagian Easy */}
       <section id="Easy">
        <div className="easy-left">
          <img src={Logo3} alt=""/>
        </div>

        <div className="easy-right">
            <h1><b>Easy Pet Wellness</b></h1>
            <h4>Instant <span class="under2">Smil</span>es</h4>
            <p>Kesejahteraan hewan peliharaan adalah kunci bagi kehidupan <br />
            bahagia dan sehat mereka. Dengan memberikan perawatan yang <br />
            memadai dan melakukan pemeriksaan kesehatan rutin, kita dapat <br />
            meningkatkan kesejahteraan mereka dan melihat senyum bahagia <br />
            terpancar dari wajah mereka sebagai balasan</p>
            <a href="Singup">
              <button className="btn3">Explore more</button>
            </a>
        </div>
    </section>

    <section id='Card'>
      <div className="card1">
      <div className="blog-container">
        <div className="blog-left">
          <h1><span className='under4'><b>Blog</b></span></h1>
        </div>
        <div className="blog-right">
        <p>Temukan informasi berguna tentang perawatan hewan peliharaan <br />
        di blog kami! Dari tips kesehatan hingga panduan perawatan, <br />
        temukan semua yang Anda butuhkan untuk menjadi pemilik yang <br />
        lebih baik bagi hewan kesayangan Anda. Segera kunjungi blog kami <br />
        dan temukan artikel yang sesuai dengan kebutuhan Anda hari ini!</p>
        </div>
      </div>

      <div className="card-container-blog">
        <div className="card-item-blog">
          <img src={Blog1} alt="" />
          <br />
          <p>Makanan-makanan berbahaya yang harus dihindari untuk hewan peliharaan Anda.</p>
            <div className="blog-text">
              <h4><b>Makanan Berbahaya untuk Hewan Peliharaan</b></h4>
                <a href="">
                  <button className="btn2">Read More</button>
                </a>
            </div>
        </div>
        <div className="card-item-blog">
          <img src={Blog2} alt="" />
          <br />
          <p>Perawatan gigi pada hewan peliharaan untuk mencegah masalah kesehatan mulut yang serius.</p>
            <div className="blog-text">
            <h4><b>Perawatan Gigi dan Mulut pada Hewan</b></h4>
                <a href="">
                  <button className="btn2">Read More</button>
                </a>
            </div>
        </div>
        <div className="card-item-blog">
          <img src={Blog3} alt="" />
          <br />
          <p>Pastikan hewan peliharaan Anda mendapatkan vaksin yang diperlukan sesuai dengan jadwal yang direkomendasikan</p>
            <div className="blog-text">
            <h4><b>Pentingnya Vaksinasi untuk Hewan Peliharaan</b></h4>
                <a href="">
                  <button className="btn2">Read More</button>
                </a>
            </div>
        </div>
      </div>

      <div className="send">
        <div className="send-container">
          <div className="form-container">
            <h2><b>Send a Message</b></h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name='name' placeholder='Full Name' 
              onChange={e => SetValues({...values, name: e.target.value})}/>
              <input type="email" name='email' placeholder='Email' 
              onChange={e => SetValues({...values, email: e.target.value})}/>
              <input type="message" name='message' rows="4" placeholder='Message' 
              onChange={e => SetValues({...values, message: e.target.value})}/>
              <button type='submit'>Next</button>
            </form>
          </div>
        <div className="text-container">
          <h1><b>Get In Touch!</b></h1>
          <h7>For every new <span className="under3">update</span> <br/> from us</h7>
          <p>Tetap terhubung dengan kami untuk pembaruan terbaru! Temukan layanan kesehatan hewan yang lengkap di situs kami. Dapatkan informasi terbaru tentang kesehatan dan kesejahteraan hewan peliharaan Anda. Segera kunjungi situs kami dan temukan solusi lengkap untuk kebutuhan perawatan hewan peliharaan Anda!</p>
        </div>
        </div>
      </div>
      </div>
    </section>

    <section className="emaile">
        <div className="sende">
            <div className="sendemail">
              <img src={mail1} alt="" />
              <h2><b>EMAIL</b><br />
              <span className='text'>nabilaabalqis@gmail.com</span></h2>
            </div>
            <div className="sendemail">
              <img src={mail1} alt="" />
              <h2><b>PHONE</b><br />
              <span className='text'>+6281261886309</span></h2>
            </div>
        </div>
    </section>

    <div>
      <FAQ/>
    </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default BERANDA