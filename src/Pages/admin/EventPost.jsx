import React from "react";
import "./EventPost.css";
import lock from "../../assets/locked.png";

function EventPost() {
  return (
    <>
      <div className="event-manage">
        <div className="eventpost-img">
          <img src={lock} alt="image" />
          <h3>Post Event</h3>
        </div>
      </div>

      <form className="Form-handle">
        <input type="file"  placeholder="Choose pic "/>

        <input type="text" placeholder="Title" />

        <input type="date" />
        <input type="date" />
        <input type="time" />
        <input type="time" />
        <input type="number" placeholder="Price" />
        <select required>
          <option value="">Select category</option>
          <option>Music</option>
          <option>Dance</option>
          <option>Sports</option>
          <option>Singing</option>
        </select>
        <input type="text" placeholder="Location" />
        <textarea placeholder="Description" />
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default EventPost;
