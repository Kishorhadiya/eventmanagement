import React from "react";
import "./Event.css";
import cricket from "../assets/cricket.jpg";
import office from "../assets/office party.jpg";
import december from "../assets/December event.jpg";
import food from "../assets/Food-zone.jpg";
import garba from "../assets/garba.jpg";
import other from "../assets/other.jpg";
import { useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate();

  const eventData = [
    {
      id: 1,
      image: cricket,
      title: "Cricket",
      category: "cricket",
    },
    {
      id: 2,
      image: office,
      title: "Office Party",
      category: "office-party",
    },
    {
      id: 3,
      image: december,
      title: "december Events",
      category: "december",
    },
    {
      id: 4,
      image: food,
      title: "food Zone",
      category: "food",
    },
    {
      id: 5,
      image: garba,
      title: "Garba",
      category: "garba",
    },
    {
      id: 6,
      image: other,
      title: "Music Concert",
      category: "music",
    },
  ];

  return (
    <>
      <div className="event-img">
        <h1>Our Events</h1>
      </div>

      <div className="event-container">
        {eventData.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <button onClick={() => navigate(`/eventdetalis/${event.category}`)}>
              {event.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Event;
