import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Event";
import MoreEvents from "./Pages/MoreEvents";
import Cricket from "./Pages/Cricket";
import Login from "./pages/Login";
import EventDetalis from "./Pages/EventDetalis";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname  !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="eventdetalis" element={<EventDetalis />} />
        <Route path="eventdetalis/:category" element={<EventDetalis />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
export default App;
