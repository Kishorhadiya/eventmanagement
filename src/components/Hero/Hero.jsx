import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero-section">
      <h1>One Stop Event Planet</h1>
      <p>Yet bad any for travelling assistance indulgence unpleasing.</p>

      <p>
        Not enough all exercise blessing. Indulgence way everything joy
        alteration boisterous the attachment.
      </p>
      <p>Party we years to order allow asked of.</p>

      <div className="Bootom">
        <p> Every event shout be perfect.</p>

        <input type="email" placeholder="Enter the Email"></input>
        <button>Get Started</button>
      </div>

      <section className="about-event">
        <div className="top">
          <div className="left">
            <h4>What is Harmoni Event</h4>

            <h1>
              Your Event Will be Beyond your
              <br />
              imagination
            </h1>
          </div>

          <div className="right">
            <p>
              We provide the best event planning services for students, colleges
              and organizations. Our experienced team creates memorable events
              with professional management.
            </p>

            <a href="#">Explore the Library</a>
          </div>
        </div>

        <div className="bottom">
          <div className="box">
            <span></span>
            <h3>Chatbots</h3>

            <p>
              We provide friendly support and modern technology for every event.
            </p>
          </div>

          <div className="box">
            <span></span>
            <h3>Knowledgebase</h3>

            <p>
              Get useful information and event planning guides for better
              management.
            </p>
          </div>

          <div className="box">
            <span></span>
            <h3>Education</h3>

            <p>Learn event organization with simple and practical examples.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
