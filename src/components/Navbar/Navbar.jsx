import "./Navbar.css";
import logo1 from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="logo" />

        <div className="logo-text">
          <h2>HARMONI</h2>
          <span>EVENT MANAGEMENT</span>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/events">EVENTS</Link>
        </li>
        <li>
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>

      <div className="user">
        <img src={user} alt="user" />
        <span>Spark User ▼</span>

        <div className="dropdown-menu">
          <Link to="/account">Account</Link>
          <Link to="/booking">My Booking</Link>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </nav>
  );
  <section className="hero">
    <h2>One Stop event Planet</h2>
  </section>;
}

export default Navbar;
