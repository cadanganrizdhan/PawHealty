import React, { useEffect, useState } from "react";
import "../style/Navbarw.css";
import bgwhite from "../assets/bgwhite.png";
import logo11 from "../assets/profw.png";

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

  return (
    <header>
      <nav className={fix ? "navbarw fixed" : "navbarw"}>
        <div className="logow">
          <img src={bgwhite} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="AfterLogin" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="AboutusAfter" className="text-white">
                About Us
              </a>
            </li>
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="#" className="text-white">
                Service
              </a>
              {dropdownOpen && (
                <ul className="dropdown">
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
              <a href="Listblog" className="text-white">
                Blog
              </a>
            </li>
            <li>
            {data ? (
                <a href="Profilpost">
                  <img src={logo11} alt="Logo" />
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
