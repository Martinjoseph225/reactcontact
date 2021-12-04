import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import Home from "../Home/Home";
import SearchUser from "../SearchUser/SearchUser";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="classnav">
      <Router>
        <div className="links">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>

          <div>
            <Link to="/adduser" className="link">
              Add User
            </Link>
          </div>
          <div>
            <Link to="/searchuser" className="link">
              Search User
            </Link>
          </div>
          <div>
            <Link to="/contactus" className="link">
              Contact Us
            </Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/contactus" element={<Contact />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/searchuser" element={<SearchUser />} />
          <Route exact path="/adduser" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavBar;
