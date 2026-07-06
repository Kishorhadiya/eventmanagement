import React from "react";
import "./Booking.css";
import qr from "../assets/Qr1.jpg";

function Booking() {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="left">
          <img src={qr} alt="QR Code" />
          <button>Delete</button>
        </div>

        <div className="right">
          <div className="details">
            <h3>Ticket ID:</h3>
            <p>66f120d8512050c216db9</p>

            <h3>Location:</h3>
            <p>Motera Stadium</p>
            <p>Ahmedabad</p>

            <h3>Price:</h3>
            <p>₹2499</p>
          </div>

          <div className="details">
            <h3>Date & Time:</h3>
            <p>2024-05-09,11:11</p>

            <h3>Booking Date:</h3>
            <p>23/09/2024</p>

            <h3>Title:</h3>
            <p>INDIAN PREMIER LEAGUE</p>
          </div>
        </div>
      </div>

      <div className="ticket">
        <div className="left">
          <img src={qr} alt="QR Code" />
          <button>Delete</button>
        </div>

        <div className="right">
          <div className="details">
            <h3>Ticket ID:</h3>
            <p>66f1231b512050c216db9</p>

            <h3>Location:</h3>
            <p>GokulDham Society</p>
            <p>Mumbai</p>

            <h3>Price:</h3>
            <p>₹550</p>
          </div>

          <div className="details">
            <h3>Date & Time:</h3>
            <p>2024-10-30,09:00</p>

            <h3>Booking Date:</h3>
            <p>23/09/2024</p>

            <h3>Title:</h3>
            <p>GOKULDHAM PREMIER LEAGUE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
