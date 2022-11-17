import React from "react";
import "./Navbar.css";
function Navbar(props) {
  return (
    <nav><a href="/"><h1 className="title">Stand<span className="title-style">Up</span></h1></a>
      <ul className="navbar">
        <li className="nav-item">
          {" "}
          <a href="/home">Home</a>
        </li>
        <li className="nav-item">
          {" "}
          <a href="/contact">Contact</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
