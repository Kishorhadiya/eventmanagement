  import React from "react";
  import "./AdminSidebar.css";
  import  img from "../../assets/user.jpg"
  import {
    FaUsers,
    FaCalendarAlt,
    FaImages,
    FaSignOutAlt,
    FaListAlt,
    FaEnvelope,
  } from "react-icons/fa";
  import { NavLink } from "react-router-dom";

  function AdminSidebar() {
    return (
      <aside className="sidebar">
        <div className="sidebar-logo">
          {/* <h2>EMS</h2> */}
          {/* <img src={img}/> */}
        </div>

        <ul className="sidebar-menu">
          <li>
            <NavLink to="/admin/userlist">
              <FaUsers />
              <span>User List</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/eventpost">
              <FaCalendarAlt />
              <span>Event Post</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/postcategory">
              <FaListAlt />
              <span>Post Category</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/addgalley">
              <FaImages />
              <span>Add Gallery</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/contactlist">
              <FaEnvelope />
              <span>Contact List</span>
            </NavLink>
          </li>
        </ul>

        <div className="sidebar-footer">
          <p>Authentication</p>

          <NavLink to="/login" className="logout-btn">
            <FaSignOutAlt />
            <span>Log Out</span>
          </NavLink>
        </div>
      </aside>
    );
  }

  export default AdminSidebar;
