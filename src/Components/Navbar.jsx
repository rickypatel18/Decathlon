import React from "react";
import "./Navbar.css";
import LocationPicker from "./LocationPicker";
import Serach from "./Search";
import Explore from "./Explore";
import user from "./svg/user.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const toggleSignIn = () => {
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://play.decathlon.in/static/media/logo.7625af89.svg"
          alt="logo"
          height={40}
        />
      </div>

      <div className="explore">
        <Explore />
      </div>

      <div className="search-container">
        <Serach />
      </div>

      <div className="location">
        <LocationPicker />
      </div>

      <div className="signin">
        <div className="signin-container">
          <img
            src={user}
            height={20}
            alt="user"
            onClick={toggleSignIn}
            className="signin-icon"
          />
          <p onClick={toggleSignIn}>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
