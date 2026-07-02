import React from "react";
import "./MoreEvents.css";
import indian from "../assets/indian premier league.jpg";
import women from "../assets/indian women cricket.jpg";
import club from "../assets/club party.jpg";
import cricket from "../assets/cricket.jpg";
import { useNavigate } from "react-router-dom";

function MoreEvents() {
  const navigate = useNavigate();
  return (
    <>
      <div className="moreevent-banner">
        <h1>More Events</h1>
      </div>

      <div className="moreevent-main">
        <div className="moreevent-box">
          <img src={indian} alt="IPL" />

          <div className="moreevent-date">
            <p>2025-03-15, 19:32</p>
          </div>

          <h2>INDIAN PREMIER LEAGUE</h2>

          <div className="moreevent-info">
            <div>
              <h4>Location:</h4>
              <p>Motera Stadium Ahmedabad</p>
            </div>

            <h3>Rs. 2499</h3>
          </div>

          <button
            onClick={() => {
              navigate("/eventdetalis");
            }}
          >
            Book Ticket →
          </button>
        </div>

        <div className="moreevent-box">
          <img src={women} alt="WPL" />

          <div className="moreevent-date">
            <p>2025-02-22, 07:30</p>
          </div>

          <h2>WOMEN PREMIER LEAGUE</h2>

          <div className="moreevent-info">
            <div>
              <h4>Location:</h4>
              <p>Wankhade Cricket Stadium, Mumbai</p>
            </div>

            <h3>Rs. 599</h3>
          </div>

          <button>Book Ticket →</button>
        </div>

        <div className="moreevent-box">
          <img src={club} alt="GPL" />

          <div className="moreevent-date">
            <p>2024-10-10, 08:00</p>
          </div>

          <h2>Fun & Witty</h2>

          <div className="moreevent-info">
            <div>
              <h4>Location:</h4>
              <p>Mumbai </p>
            </div>

            <h3>Rs. 200</h3>
          </div>

          <button>Book Ticket →</button>
        </div>

        <div className="moreevent-box">
          <img src={cricket} alt="Ground" />

          <div className="moreevent-date">
            <p>2024-12-02, 00:00</p>
          </div>

          <h2>CRICKET GROUND</h2>

          <div className="moreevent-info">
            <div>
              <h4>Location:</h4>
              <p>Ahmedabad</p>
            </div>

            <h3>Rs. 5000</h3>
          </div>

          <button>Book Ticket →</button>
        </div>
      </div>
    </>
  );
}

export default MoreEvents;
