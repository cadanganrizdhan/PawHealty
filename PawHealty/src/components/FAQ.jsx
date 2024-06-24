import React, { useState } from 'react';
import '../style/FAQ.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function FAQ() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleFAQ1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleFAQ2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleFAQ3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleFAQ4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(false);
  };

  const toggleFAQ5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };

  const [values, SetValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/FAQ', values)
    .then(res => {
      if(res.data.Status === "Success"){
        alert("Succes Send Message")
        navigate('/BERANDA')
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }

  return (
    <section id='faq-container'>
      <div className="faq-left">
      <div className="text-faq">
        <h1><b>FAQ!</b></h1>
        <p>Frequently Asked Questions</p>
      </div>

      
      <div className="dropdown1">
        <div className="faq-item">
        <h1><button onClick={toggleFAQ1} className="dropdown-btn"><span className={isOpen1 ? "arrow up" : "arrow down"}></span></button>Jam berapa pawsitively mulai beroperasi? Apakah Minggu tetap buka?</h1>
        {isOpen1 && (
          <div className="answer">
            <p>Pawsitively buka setiap hari dengan pembagian jam sebagai berikut:
              <br />
              <br />-Senin-Sabtu: 09.00-19.30 WIB.
              <br />-Minggu dan Tanggal Merah: 10.00-15.30 WIB.
              </p>
          </div>
        )}
        </div>
      </div> 
      <div className="dropdown1">
        <div className="faq-item">
        <h1><button onClick={toggleFAQ2} className="dropdown-btn"><span className={isOpen2 ? "arrow up" : "arrow down"}></span></button>Apakah bisa melakukan appointment?</h1>
        {isOpen2 && (
          <div className="answer">
            <p>Pawsitively clinic menyediakan layanan appointment. Anda dapat menghubungi <br />
            receptionist Pawsitively clinic di (+62)83878907645 (jam operasional) <br />
            atau melalui formulir online di Buat janji dengan dokter.</p>
          </div>
        )}
        </div>
      </div>

      <div className="dropdown1">
        <div className="faq-item">
        
        <h1><button onClick={toggleFAQ3} className="dropdown-btn"><span className={isOpen3 ? "arrow up" : "arrow down"}></span></button>Apakah tersedia layanan pick up delivery?</h1>
        {isOpen3 && (
          <div className="answer">
            <p>Kunjungan (besuk) pasien rawat inap dapat dilakukan setiap hari <br />
            di antara pukul 11.00 – 16.00 WIB pada hari Senin – Sabtu, <br />
            dan pukul 11.00 – 15.00 WIB pada hari Minggu atau tanggal merah. <br />
            Untuk info lebih lanjut bisa hubungi receptionist kami di (+62)83878907645 pada jam operasional. </p>
          </div>
        )}
        </div>
      </div>

      <div className="dropdown1">
        <div className="faq-item">
        
        <h1><button onClick={toggleFAQ4} className="dropdown-btn"><span className={isOpen4 ? "arrow up" : "arrow down"}></span></button>Jam berapa saja pasien boleh dibesuk?</h1>
        {isOpen4 && (
          <div className="answer">
            <p>Kunjungan (besuk) pasien rawat inap dapat dilakukan setiap hari <br />
            di antara pukul 11.00 – 16.00 WIB pada hari Senin – Sabtu, <br />
            dan pukul 11.00 – 15.00 WIB pada hari Minggu atau tanggal merah. <br />
            Untuk peraturan lain terkait pembesukan pasien di rawat inap dan rawat inap infeksius.</p>
          </div>
        )}
        </div>
      </div>

      <div className="dropdown1">
        <div className="faq-item">
        
        <h1><button onClick={toggleFAQ5} className="dropdown-btn"><span className={isOpen5 ? "arrow up" : "arrow down"}></span></button>Apakah Pawsitively memiliki layanan rawat inap untuk penyakit menular?</h1>
        {isOpen5 && (
          <div className="answer">
            <p>Pawsitively Clinic menyediakan layanan rawat inap penyakit infeksius (menular) dengan ruang isolasi tersendiri. <br />
            Ruangan isolasi tersebut berada di gedung khusus yang terpisah dari gedung utama guna meminimalisir <br />
            resiko penularan penyakit antar pasien. Untuk info lebih lanjut bisa <br />
            hubungi receptionist kami di 021-72800617 pada jam operasional.</p>
          </div>
        )}
        </div>
      </div>
      </div>

      <div className="faq-right">
          <div className="faq-form">
            <h2><b>Ask a different question</b></h2>
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
        </div>
    </section>
  );
}

export default FAQ;