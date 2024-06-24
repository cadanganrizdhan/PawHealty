import React, { useState } from "react";
import "../style/Login.css";
import Goolge from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [values, SetValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/Login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem("userData", JSON.stringify(res.data.data));

          navigate("/AfterLogin");
        } else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <section id="login">
      <div className="login-container">
        <div className="login-grid">
          <div className="login-title">
            <h1>
              <b>Log in</b>
            </h1>
            <p>
              Continue With : <img src={Goolge} alt="" />
              or
            </p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="login-email">
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) =>
                  SetValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="login-password">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  SetValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <div className="login-signup">
              <p>
                Don't have an account? <a href="Singup">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
