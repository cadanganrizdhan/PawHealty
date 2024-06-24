import React, { useEffect, useState } from "react";
import "../style/Navbarw.css";
import bgwhite from "../assets/bgwhite.png";
import logo10 from "../assets/profb.png";

const Navbarw = () => {
  const [fix, setFix] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // get from local storage
    const data = JSON.parse(localStorage.getItem("userData"));
    setData(data);
  }, []);

  function setFixed() {
    if (window.scrollY > 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
// Header
  return (
    
    <header>
      <nav className={fix ? "navbarw fixed" : "navbarw"}>
        <div className="logow">
          <img src={bgwhite} alt="Logo" />
        </div>
        <div className="menuw">
          <ul>
            <li>
              <a href="BERANDA">Home</a>
            </li>
            <li>
              <a href="Aboutus">About Us</a>
            </li>
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a
                href="
              #"
              >
                Service
              </a>
              {dropdownOpen && (
                <ul className="dropdownw">
                  <li>
                    <a href="Forumdiskusi">Forum Discussion</a>
                  </li>
                  <li>
                    <a href="Listdokter">Online Consultation</a>
                  </li>
                  <li>
                    <a href="Nearlok">Nearest Vet and Petshop</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="Listblog">Blog</a>
            </li>
            <li>
            {data ? (
                <a href="Profilpost">
                  <img src={logo10} alt="Logo" />
                </a>
              ) : (
                <a href="Login" className="btnnav">
                  SIGN IN
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbarw;
