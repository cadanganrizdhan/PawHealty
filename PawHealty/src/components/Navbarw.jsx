import React, { useEffect, useState } from 'react';
import '../style/Navbarw.css';
import logow from '../assets/bgwhite.png';
import logo from '../assets/logo.png';

const Navbarw = () => {
  const [fix, setFix] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownMini, setDropdownMini] = useState(false);
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

  function isToggle() {
    setToggleMenu(!toggleMenu);
  }

  function isToggleDropdownMini() {
    setDropdownMini(!dropdownMini);
  }

  window.addEventListener('scroll', setFixed);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  console.log(toggleMenu);

  return (
    <>
      <header>
        <nav className={`${fix ? 'navbar fixed shadow-sm' : 'navbar'} `}>
          <div className="container flex justify-between items-center mx-auto">
            <div
              className={`logo  ${
                fix ? 'w-[14rem]' : 'w-[20rem]'
              } transition-all object-cover`}
            >
              <img src={fix ? logo : logow} alt="Logo" />
            </div>
            <div className="menu h-fit hidden lg:block">
              <ul>
                <li>
                  <a
                    href="BERANDA"
                    className={`${fix ? 'text-black' : 'text-white'}  `}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="Aboutus"
                    className={`${fix ? 'text-black' : 'text-white'}  `}
                  >
                    About Us
                  </a>
                </li>
                <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                  <a
                    href=""
                    className={`${fix ? 'text-black' : 'text-white'}  `}
                  >
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
                        <a href="Lokasiklinikterdekat">Nearest Vet and Petshop</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="Listblog"
                    className={`${fix ? 'text-black' : 'text-white'}  `}
                  >
                    Blog
                  </a>
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
            <div
              className="flex flex-col gap-1.5 px-3 py-4 cursor-pointer rounded-md hover:bg-yellow-400 hover:bg-opacity-50 transition-all lg:hidden"
              onClick={isToggle}
            >
              <div
                className={`w-9 h-1 ${
                  !fix ? 'bg-white' : 'bg-black'
                } rounded-full`}
              ></div>
              <div
                className={`w-9 h-1 ${
                  !fix ? 'bg-white' : 'bg-black'
                } rounded-full`}
              ></div>
              <div
                className={`w-9 h-1 ${
                  !fix ? 'bg-white' : 'bg-black'
                } rounded-full`}
              ></div>
            </div>
          </div>
        </nav>
      </header>
      <div
        id="mobile-menu"
        className={`${
          toggleMenu ? 'flex' : 'hidden'
        } fixed top-0 left-0 w-full h-screen bg-[#fff4d4] justify-center items-center lg:hidden flex-col`}
      >
        <div
          className="fixed right-24 top-24 text-2xl font-bold p-2 cursor-pointer"
          onClick={isToggle}
        >
          x
        </div>
        <ul className="flex flex-col w-fit gap-5 text-center">
          <li>
            <a href="BERANDA">Home</a>
          </li>
          <li>
            <a href="Aboutus">About Us</a>
          </li>
          <li>
            <a onClick={isToggleDropdownMini} className="cursor-pointer">
              Service ▼
            </a>
            <ul
              className={`${
                dropdownMini ? 'flex' : 'hidden'
              } p-5 mt-4 flex-col bg-white gap-5 rounde-lg`}
            >
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
          </li>
          <li>
            <a href="Listblog">Blog</a>
          </li>
          <li className="mt-3">
            <a href="Signup" className="bg-black p-3 text-white rounded-md">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbarw;
