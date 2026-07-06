import React, { useState } from "react";
import "./AdminLogin.css";
import login from "../../assets/locked.png";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminlogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin@123") {
      localStorage.setItem("AdminLogin", "true");
      navigate("/admin");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleAdminlogin}>
        <img src={login} alt="login" />

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button type="submit" className="adminlogin">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;