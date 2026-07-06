import React from "react";
import "./AdminNavbar.css";

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-left">
        <h2>Admin</h2>
      </div>

      <div className="admin-navbar-right">
        <div className="admin-profile">
          <div className="profile-image"></div>

          <div className="profile-details">
            <h3>Event Management</h3>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
