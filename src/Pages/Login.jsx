import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username == "kishor" && password == 1815) {
      localStorage.setItem("isLogin", "true");
      navigate("/");
    } else {
      alert("Invalid username & password");
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Enter the name"
            value={username}
            onChange={(e) => Setusername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => Setpassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
