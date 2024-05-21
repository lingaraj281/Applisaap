// src/components/NavBar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img src='public\AppliSAP Solutions.png' alt="Logo" className="logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item contact">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
        <button className="btn btn-primary signin">Sign In/Register</button>
      </div>
    </nav>
  );
};
