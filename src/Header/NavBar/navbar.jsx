import React from "react";
import "./navbar.style.css";

export const Navbar = () => {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo">VVRC</h2>

        <nav>
          <ul>
            <li>
              <a href="/home">Who are We</a>
            </li>
            <li>
              <a href="/home">What we Do</a>
            </li>
            <li>
              <a href="/home">Contact Us</a>
            </li>
            <li>
              <a href="/home">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
