import React, { useState } from 'react';
import Navbarw from '../components/Navbarw.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Listblog.css'

import list1 from '../assets/list1.png'
import list2 from '../assets/list2.png'
import list3 from '../assets/list3.png'
import list4 from '../assets/list4.png'
import list5 from '../assets/list5.png'
import list6 from '../assets/list6.png'
import list7 from '../assets/list7.png'
import list8 from '../assets/list8.png'
import list9 from '../assets/list9.png'
import list10 from '../assets/list10.png'
import list11 from '../assets/list11.png'
import list12 from '../assets/list12.png'

const cards = [
  { id: 1, content: 'PERAWATAN GIGI DAN MULUT PADA HEWAN', content1: 'Perawatan gigi pada hewan peliharaan untuk mencegah masalah kesehatan mulut yang serius. Memberikan perhatian khusus pada kebersihan mulut hewan peliharaan, Anda dapat memastikan kesehatan umum mereka.', content2: 'READ MORE', img: list1},
  { id: 2, content: 'PENTINGNYA VAKSINASI UNTUK HEWAN PELIHARAAN', content1: 'Pastikan hewan peliharaan Anda mendapatkan vaksin yang diperlukan sesuai dengan jadwal yang direkomendasikan, Anda membantu melindungi mereka dari penyakit dan memperpanjang masa hidup mereka.', content2: 'READ MORE', img: list2},
  { id: 3, content: 'MAKANAN BERBAHAYA UNTUK HEWAN PELIHARAAN', content1: 'Makanan-makanan berbahaya yang harus dihindari untuk hewan peliharaan Anda. Dengan menghindari makanan-makanan ini, Anda dapat mencegah risiko keracunan dan menjaga kesehatan hewan kesayangan Anda.', content2: 'READ MORE', img: list3},
  { id: 4, content: 'TIPS MERAWAT HEWAN PELIHARAAN DI MUSIM PANAS', content1: 'Tips singkat cara merawat hewan peliharaan Anda di musim panas untuk mencegah overheating dan dehidrasi. Dengan mengikuti saran ini, Anda dapat memastikan kesehatan dan kenyamanan hewan peliharaan Anda', content2: 'READ MORE', img: list4},
  { id: 5, content: 'KESEHATAN MENTAL PADA HEWAN PELIHARAAN', content1: 'Dengan memahami perilaku mereka, Anda dapat mengidentifikasi tanda-tanda stres, kecemasan, atau depresi, dan memberikan dukungan yang diperlukan untuk kesejahteraan mereka.', content2: 'READ MORE', img: list5},
  { id: 6, content: 'PENTINGNYA JANJI TEMU RUTIN KONSULTASI HEWAN', content1: 'Dengan menjadwalkan janji temu rutin dengan dokter hewan, Anda dapat memastikan bahwa hewan peliharaan Anda tetap sehat dan terbebas dari masalah kesehatan yang mungkin terjadi.', content2: 'READ MORE', img: list6},
  { id: 7, content: 'ALASAN KENAPA KUCING TAKUT AIR', content1: 'Perawatan gigi pada hewan peliharaan untuk mencegah masalah kesehatan mulut yang serius. Memberikan perhatian khusus pada kebersihan mulut hewan peliharaan, Anda dapat memastikan kesehatan umum mereka.', content2: 'READ MORE', img: list7},
  { id: 8, content: 'KENALI LEPTOSPIRA PADA ANJING', content1: 'Pastikan hewan peliharaan Anda mendapatkan vaksin yang diperlukan sesuai dengan jadwal yang direkomendasikan, Anda membantu melindungi mereka dari penyakit dan memperpanjang masa hidup mereka.', content2: 'READ MORE', img: list8},
  { id: 9, content: 'MAKANAN BERBAHAYA UNTUK HEWAN PELIHARAAN', content1: 'Makanan-makanan berbahaya yang harus dihindari untuk hewan peliharaan Anda. Dengan menghindari makanan-makanan ini, Anda dapat mencegah risiko keracunan dan menjaga kesehatan hewan kesayangan Anda.', content2: 'READ MORE', img: list9},
  { id: 10, content: 'ANJING KAWIN TIDAK BISA LEPAS?', content1: 'Tips singkat cara merawat hewan peliharaan Anda di musim panas untuk mencegah overheating dan dehidrasi. Dengan mengikuti saran ini, Anda dapat memastikan kesehatan dan kenyamanan hewan peliharaan Anda', content2: 'READ MORE', img: list10},
  { id: 11, content: 'KETAHUI TANDA TANDA KUCING BIRAHI', content1: 'Dengan memahami perilaku mereka, Anda dapat mengidentifikasi tanda-tanda stres, kecemasan, atau depresi, dan memberikan dukungan yang diperlukan untuk kesejahteraan mereka.', content2: 'READ MORE', img: list11},
  { id: 12, content: 'KENAPA KUCING TIDUR TERUS? INI ALASANNYA!', content1: 'Dengan menjadwalkan janji temu rutin dengan dokter hewan, Anda dapat memastikan bahwa hewan peliharaan Anda tetap sehat dan terbebas dari masalah kesehatan yang mungkin terjadi.', content2: 'READ MORE', img: list12},
];

const Listblog = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextCards = () => {
    setStartIndex((prevIndex) => (prevIndex + 6) % cards.length);
  };

  const previousCards = () => {
    setStartIndex((prevIndex) => (prevIndex - 6 + cards.length) % cards.length);
  };

  const displayedCards = cards.slice(startIndex, startIndex + 6);

  return (
    <>
    <div>
      <Navbarw/>
    </div>
    <section id='bio-blog'>
      <div className="text">
        <h1><b>Blog</b></h1>
        <p>All about your pet</p>
      </div>
    </section>

    <div className="card-sliderb">
      <div className="card-containerb">
        {displayedCards.map((card) => (
          <div key={card.id} className="cardb">
            <img src={card.img} alt={card.content} className="card-imgb" />
            <h6>{card.content}</h6>
            <h7>{card.content1}</h7>
            <h8><a href="">{card.content2}</a></h8>
          </div>
        ))}
      </div>
      <div className="buttonsb">
        <button onClick={previousCards}>1</button>
        <button onClick={nextCards}>2</button>
      </div>
    </div>
    
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Listblog
  