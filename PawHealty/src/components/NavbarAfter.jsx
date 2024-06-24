import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import logo from "../assets/logo.png";
import logo10 from "../assets/profb.png";

const Navbar = () => {
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
      <nav className={fix ? "navbar fixed" : "navbar"}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="AfterLogin">Home</a>
            </li>
            <li>
              <a href="AboutusAfter">About Us</a>
            </li>
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="#">Service</a>
              {dropdownOpen && (
                <ul className="dropdown">
                  <li>
                    <a href="Forumdiskusi">Forum Discussion</a>
                  </li>
                  <li>
                    <a href="Listdokter">Online Consultation</a>
                  </li>
                  <li>
                    <a href="Map">Nearest Vet and Petshop</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="ListblogA">Blog</a>
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

export default Navbar;
