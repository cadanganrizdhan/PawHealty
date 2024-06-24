import React, { useEffect, useState } from "react";
import "../style/Profil.css";
import dr1 from "../assets/dr1.png";
import axios from "axios";

const Profil = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // get from local storage
    const data = JSON.parse(localStorage.getItem("userData"));
    setData(data);
    setName(data.name)
    setEmail(data.email)
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    const newData = {
      name: name || data.name,
      email: email || data.email,
      password,
    };

    try {
      const res = await axios.put(`http://localhost:5000/editprofil`, newData);
      alert("Profile updated successfully!");
      localStorage.setItem("userData", JSON.stringify(res.data.data));
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="profil">
        <div className="profile-menu">
          <div className="profile-info">
            <img src={dr1} alt="Profile" className="profile-photo" />
            <div className="profile-details">
              <h2 className="profile-name">
                <b>{data.name}</b>
              </h2>
              <p className="profile-email">{data.email}</p>
              <p className="profile-join-date">Joined May 2023</p>
              <p className="profile-posts">Jumlah Post: 3</p>
            </div>
          </div>
          <button className="edit-profile-button" onClick={handleEditProfile}>
            Edit Profil
          </button>
          <button className="edit-profile-button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </section>
      <div className="profil-container">
        <a href="Profilpost" className="profil-list-item">
          <b>Posts</b>
        </a>
        <a href="Profilrep" className="profil-list-item">
          <b>Replies</b>
        </a>
        <a href="Profileapp" className="profil-list-item">
          <b>Appointment</b>
        </a>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2 className="profile-name">Edit Profil</h2>
            <form onSubmit={handleSubmitEdit}>
              <div className="edit-profile-name">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="edit-profile-email">
                <label>Email:</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="edit-profile-password">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="edit-profile-button">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profil;
