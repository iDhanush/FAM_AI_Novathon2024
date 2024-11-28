import React from "react";
import { Link } from "react-router-dom"; 
import './Nav.scss'

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left-container">
        <div className="logo">Fam.ai</div>
      </div>
      <div className="nav-right-container">
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
