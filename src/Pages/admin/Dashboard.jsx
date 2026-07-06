import React from "react";
import "./Dashboard.css";
import userdata from "./userlistdata";

function Dashboard() {
  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
    
        <tbody>
          {userdata.map((user, index) => {
            return (
            <tr key={user.id}>
              <td>{index + 1}</td>

              <td>
                <img src={user.profile} alt="" className="Profile-img" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>

              <td>
                <button className="unblock-btn">{user.status}</button>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
