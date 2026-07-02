import "./Home.css";
import hero from "../assets/heroimg.jpg";
import random from "../assets/randomuser.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            One Stop Event
            <br />
            Planet
          </h1>

          <p>
            Yet bad any for travelling assistance indulgence unpleasing. Not
            enough all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>

          <h4>Every event should be perfect.</h4>

          <div className="hero-search">
            <input type="email" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>

          <div className="people">
            <img src={random} alt="people" />
            <span>1,600 people requested access a visit in last 24 hours</span>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="top">
          <div className="left">
            <h4>What is Harmoni</h4>
            <h4>Event</h4>

            <h1>
              Your Event Will be Beyond your
              <br />
              imagination
            </h1>
          </div>

          <div className="right">
            <p>
              We so opinion me message as delight. Whole front do of Plate heard
              oh ought. His defective nor convinced residence own. Connection
              has put impossible own apartments boisterous. At jointure ladyship
              an insisted so humanity.
            </p>

            <a href="#">Explore the Library</a>
          </div>
        </div>

        <div className="bottom">
          <div className="box">
            <div className="line"></div>

            <h3>Chatbots</h3>

            <p>
              We so opinion friend me message as delight. Whole front do of
              Plate heard oh ought.
            </p>
          </div>

          <div className="box">
            <div className="line"></div>

            <h3>Knowledgebase</h3>

            <p>
              At jointure ladyship an insisted so humanity. Friendly behaviour
              entrance to on by.
            </p>
          </div>

          <div className="box">
            <div className="line"></div>

            <h3>Education</h3>

            <p>
              At jointure ladyship an insisted so humanity. Friendly behaviour
              entrance to on by.
            </p>
          </div>
        </div>
      </section>

      <section className="event-about">
        <div className="event-about-left">
          <h2>
            Harmony Event <br />
            Management firm & <br />
            Wedding Planner is a <br />
            group of creative minds <br />
            who would like to make <br />
            weddings, birthday & <br />
            any kind of events <br />
            courteous & a better <br />
            place for our clients to <br />
            celebrate important <br />
            moment of their lives...
          </h2>

          <a href="#" className="event-link">
            Request Early Access to get Started
          </a>
        </div>

        <div className="event-about-right">
          <div className="event-service-item">
            <div className="event-service-title">
              <div className="event-line"></div>
              <h3>Photography</h3>
            </div>

            <p>
              Team of skilled photographers are ready to snap the best moments
              of your ceremony.
            </p>
          </div>

          <div className="event-service-item">
            <div className="event-service-title">
              <div className="event-line"></div>
              <h3>Cinematography or Videography Service</h3>
            </div>

            <p>
              Creative Full HD 1080p Video. A different space of your ceremony.
            </p>
          </div>

          <div className="event-service-item">
            <div className="event-service-title">
              <div className="event-line"></div>
              <h3>Full Venue Decoration Service</h3>
            </div>

            <p>A blend of out-of-box ideas to decorate your precious date.</p>
          </div>

          <div className="event-service-item">
            <div className="event-service-title">
              <div className="event-line"></div>
              <h3>Home Decoration</h3>
            </div>

            <p>Just call us and get total event solution under one roof.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
