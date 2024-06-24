import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Isiblog.css'
import logo from '../assets/blog1.png'
import logo1 from '../assets/search.png'
import logo2 from '../assets/list1.png'
import logo3 from '../assets/list2.png'
import logo4 from '../assets/list4.png'
import logo5 from '../assets/list5.png'
import logo6 from '../assets/list6.png'

const Isiblog = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="article-page">
        <div className="content">
            <h1>MAKANAN BERBAHAYA UNTUK HEWAN PELIHARAAN</h1>
            <img src={logo} alt="Makanan berbahaya untuk hewan peliharaan" className="article-image" />
            <p>
            Makanan yang kita berikan kepada hewan peliharaan merupakan peran penting dalam menjaga kesehatan dan kesejahteraan mereka. Meskipun kita sering kali ingin memanjakan hewan kesayangan kita dengan camilan manusia, penting untuk diingat bahwa beberapa makanan yang aman bagi kita dapat berbahaya bahkan mematikan bagi hewan peliharaan. Contohnya, cokelat mengandung zat yang disebut teobromin, yang bisa meracuni sistem saraf hewan jika dikonsumsi dalam jumlah besar.
            
            Selain itu, ada beberapa makanan lain yang juga perlu dihindari, seperti alpukat, bawang, dan anggur. Alpukat mengandung persin, yang dapat menyebabkan muntah dan diare pada hewan peliharaan, sedangkan bawang dan anggur dapat merusak sel darah merah mereka dan menyebabkan masalah kesehatan serius. Penting untuk menjaga makanan-makanan berbahaya ini jauh dari jangkauan hewan peliharaan kita dan memberikan makanan yang aman dan sehat.
            
            Sebagai pemilik hewan yang bertanggung jawab, kita juga harus waspada terhadap makanan yang mungkin ada dalam rumah kita yang bisa menjadi ancaman bagi hewan peliharaan kita. Selain itu, selalu konsultasikan dengan dokter hewan Anda tentang makanan apa yang aman diberikan kepada hewan peliharaan Anda, dan pastikan untuk memberikan diet yang seimbang dan sesuai dengan kebutuhan nutrisi mereka. Dengan memperhatikan apa yang mereka makan, kita dapat memastikan bahwa mereka tetap sehat dan bahagia selama bertahun-tahun mendatang.
            
            Mengenali makanan berbahaya bagi hewan peliharaan adalah langkah pertama dalam menjaga kesehatan mereka. Selain makanan yang sudah disebutkan sebelumnya, seperti cokelat, alpukat, bawang, dan anggur, ada beberapa bahan makanan dan bahan kimia rumah tangga lainnya yang juga perlu dihindari. Misalnya, xylitol, sebuah pengganti gula yang sering ditemukan dalam permen karet dan produk manis lainnya, menyebabkan penurunan gula darah dan kerusakan hati pada hewan peliharaan jika mereka mengonsumsinya. Pemilik hewan harus selalu membaca label makanan dengan cermat dan menyimpan makanan dan produk rumah tangga yang berbahaya di tempat yang tidak dapat dijangkau oleh hewan peliharaan. Dengan meningkatkan kesadaran tentang makanan dan bahan berbahaya ini, kita dapat membantu menjaga kesehatan dan kebahagiaan hewan peliharaan kita.
            </p>
        </div>

        <aside className="sidebar">
            <div className="search-container">
                <input type="text" placeholder="Search" />
                <button className="search-button">
                    <img src={logo1} alt="Search" />
                </button>
            </div>
            <div className="sidebar-articles">
                <h2>Artikel Terkait</h2>
                <div className="sidebar-article">
                    <img src={logo2} alt="Artikel 1" />
                    <p>Pentingnya Janji Temu Rutin Konsultasi Online</p>
                </div>
            </div>    
            <div className="sidebar-articles">
                {/* <h2>Artikel Terkait</h2> */}
                <div className="sidebar-article">
                    <img src={logo3} alt="Artikel 2" />
                    <p>Kesehatan Mental Hewan Peliharaan</p>
                </div>
            </div>
            <div className="sidebar-articles">
                {/* <h2>Artikel Terkait</h2> */}
                <div className="sidebar-article">
                    <img src={logo4} alt="Artikel 3" />
                    <p>Merawat Hewan Peliharaan Dimusim Panas</p>
                </div>
            </div>
            <div className="sidebar-articles">
                {/* <h2>Artikel Terkait</h2> */}
                <div className="sidebar-article">
                    <img src={logo5} alt="Artikel 4" />
                    <p>Pentingnya Vaksinasi Untuk Hewan Peliharaan</p>
                </div>
            </div>
            <div className="sidebar-articles">
                {/* <h2>Artikel Terkait</h2> */}
                <div className="sidebar-article">
                    <img src={logo6} alt="Artikel 5" />
                    <p>Perawatan Gigi dan Mulut Pada Hewan</p>
                </div>
            </div>
        </aside>
      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Isiblog