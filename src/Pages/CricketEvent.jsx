import React from "react";
import "./CricketEvent.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import banner from "../assets/cricket.jpg";

function CricketEvent() {
  return (
    <div className="details-container">
      <div className="banner">
        <img src={banner} alt="Event Banner" />
      </div>

      <div className="top-section">
        <div className="left-content">
          <h1>INDIAN PREMIER LEAGUE</h1>

          <h2>₹2499</h2>

          <p className="description">Indian Premier League</p>

          <h3>When and Where</h3>
        </div>

        <div className="right-content">
          <button className="book-btn">Book Ticket</button>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h4>Date and Time</h4>

          <div className="icon-row">
            <FaCalendarAlt className="icon" />

            <div>
              <p>Start Date: 2025-03-15</p>
              <p>Start Time: 19:32</p>
            </div>
          </div>
        </div>

      

        <div className="info-card">
          <h4>Date and Time</h4>

          <div className="icon-row">
            <FaCalendarAlt className="icon" />

            <div>
              <p>End Date: 2024-05-09</p>
              <p>End Time: 11:11</p>
            </div>
          </div>
        </div>
      </div>

     

      <div className="location-card">
        <h4>Location</h4>

        <div className="icon-row">
          <FaMapMarkerAlt className="icon" />

          <p>Motera Stadium, Ahmedabad</p>
        </div>
      </div>
    </div>
  );
}

export default CricketEvent;
