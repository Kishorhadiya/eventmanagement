//user page
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
import Account from "./Pages/Account";
import Booking from "./Pages/Booking";
import CricketDetalis from "./Pages/CricketEvent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

//Admin page
import Dashboard from "./Pages/admin/Dashboard";
import AddGalley from "./Pages/admin/AddGalley";
import Adminlogin from "./Pages/admin/AdminLogin";
import ContactList from "./Pages/admin/ContactList";
import Event from "./Pages/admin/EventPost";
import PostCategory from "./Pages/admin/PostCategory";
import UserList from "./Pages/admin/Userlist";
import EventPost from "./Pages/admin/EventPost";
import AdminLogin from "./Pages/admin/AdminLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/*User Layout*/}

          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="eventdetalis" element={<EventDetalis />} />
            <Route path="eventdetalis/:category" element={<EventDetalis />} />
            <Route path="cricketevent" element={<CricketDetalis/>}/>
            <Route path="/events" element={<Events />} />
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/booking" element={<Booking />} />
          </Route>
          {/*Admin Layout */}

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<UserList />} />
            <Route path="addgalley" element={<AddGalley />} />
            <Route path="adminlogin" element={<Adminlogin />} />
            <Route path="contactlist" element={<ContactList />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="eventpost" element={<EventPost />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="postcategory" element={<PostCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
