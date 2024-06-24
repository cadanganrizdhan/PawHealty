import React, { useState } from "react";
import NavbarAfter from "../components/NavbarAfter.jsx";
import Footer from "../components/Footer.jsx";
import "../style/Tambahforumdiskusi.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Tambahforumdiskusi = () => {
  const [values, SetValues] = useState({
    judul: "",
    isi: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/Tambahforumdiskusi", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Thread posted successfully!");
          navigate("/Forumdiskusi");
        } else {
          alert("Error");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <>
      <div>
        <NavbarAfter />
      </div>
      <main>
        <div className="post-thread">
          <h2>Post Thread</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="judul"
              placeholder="Thread Title"
              onChange={(e) => SetValues({ ...values, judul: e.target.value })}
            />
            <textarea
              placeholder="Write your thread here..."
              onChange={(e) => SetValues({ ...values, isi: e.target.value })}
            ></textarea>
            <div className="buttons">
              <button>Add Attachment</button>
              <button>Post Thread</button>
            </div>
          </form>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Tambahforumdiskusi;
