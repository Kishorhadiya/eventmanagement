import React from "react";
import "./Contact.css";
import lock from "../assets/locked.png";

const Contact = () => {
  return (
    <>
      <div className="image-background">
        <div className="image">
          <h1>CONTACT US NOW</h1> <br></br>
          <h1>
            <span>KEEP </span> IN TOUCH
          </h1>
        </div>

        <div class="image-text"></div>
      </div>

      <div className="Contact-from">
        <img src={lock}></img>
        <h2>Change user Detalis</h2>

        <form className="form">
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />

          <label>Email</label>
          <input type="email" placeholder="Enter Email" />

          <label>Gender</label>

          <div className="gender">
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>

            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="other" />
            <label htmlFor="other">Other</label>
          </div>

          <label>Phone Number</label>
          <input type="text" placeholder="Enter Phone Number" />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit">CHANGE</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
