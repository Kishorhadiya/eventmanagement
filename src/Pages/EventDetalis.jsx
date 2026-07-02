import { useParams } from "react-router-dom";
import { events } from "./store.js";
import "./EventDetalis.css";

const EventDetalis = () => {
  const { category } = useParams();

  const eventList = events.filter(
    (item) => item.category === category
  );

  if (eventList.length === 0) {
    return (
      <div className="not-found">
        <h2>Event Not Found</h2>
      </div>
    );
  }

  return (
    <div className="event-details-container">
      {eventList.map((event) => (
        <div className="event-card-details" key={event.id}>
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
          />

          <div className="event-content">
            <h1>{event.title}</h1>

            <h2>₹ {event.price}</h2>

            <p className="event-description">
              Welcome to {event.title}. Book your ticket today and enjoy an unforgettable experience.
            </p>

            <button className="book-btn">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetalis;