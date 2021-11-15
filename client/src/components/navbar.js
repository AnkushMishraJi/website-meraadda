import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import { UserContext } from "../App";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper #fafafa grey lighten-5">
        <a href="/" className="brand-logo">
          MERA ADDA
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/bsignup">Business Sign-up</a>
          </li>
          <li>
            <a href="/bsignin">Business Sign-in</a>
          </li>
          <li>
            <a href="/uphone">Phoneotp</a>
          </li>
          <li>
            <a href="/usignup">User Sign-up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
