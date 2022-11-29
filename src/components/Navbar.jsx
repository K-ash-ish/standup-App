import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
function Navbar(props) {
  return (
    <nav><a href="/"><h1 className="title">Stand<span className="title-style">Up</span></h1></a>
      <ul className="navbar">
        <li className="nav-item">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          {" "}
          <Link to= "/allstandups">AllStandups</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
