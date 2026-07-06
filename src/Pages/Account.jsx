import React from "react";
import "./Account.css";
import fire from "../assets/fireimg2.jpg";
import user from "../assets/user.jpg";

function Account() {
  return (
    <div className="account">
      <div className="header">
        <img src={fire} alt="" />
        <h3>Account Details</h3>
      </div>

      <div className="line"></div>

      <div className="menu">
        <h3>🏠 HOME</h3>
        <h3>CHANGE PASSWORD</h3>
      </div>

      <div className="content">
        <h2>Change Account Details</h2>

        <div className="profile">
          <img src={user} alt="" />
          {/* <span className="camera">📷</span> */}
        </div>

        <div className="detail">
          <span>👥 Spark User</span>
          <span>✏️</span>
        </div>

        <div className="detail">
          <span>✉️ sparkuser@gmail.com</span>
          <span>✏️</span>
        </div>

        <div className="detail">
          <span>♂ Male</span>
          <span>✏️</span>
        </div>

        <div className="detail">
          <span>📱 8989898989</span>
          <span>✏️</span>
        </div>
      </div>
    </div>
  );
}

export default Account;
