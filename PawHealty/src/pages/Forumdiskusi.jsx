import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import "../style/Forumdiskusi.css";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forumdiskusi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/Forumdiskusi");
      setData(response.data.data);
    };

    fetchData();

    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    setCurrentData(data.slice(begin, end));
  }, [currentPage, data]);

  const handleNext = () => {
    // cek current page
    // jika current page < total page maka currentPage + 1
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const handlePrev = () => {
    // cek current page
    // jika current page > 1 maka currentPage - 1
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(Math.ceil(data.length / itemsPerPage));
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section id="forum-diskusi">
        <div className="forum-diskusi-text">
          <h1><b>Discussion Forum </b></h1>
        </div>
      </section>
      <div className="forum-container">
        <div className="forum-header">
          <h2>Sharing is Caring</h2>
        {/* add thread */}
          <button className="btn btn-primary" onClick={() => navigate("/Tambahforumdiskusi")}>
              Add Thread
          </button>
        </div>
        
        {/* make table */}
        <table className="forum-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Contain</th> 
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.judul}</td>
                  <td>{item.isi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => handlePrev()}>Previous</button>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Forumdiskusi;
