import React from "react";
import "../MainHeader/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <h1>Uber</h1>
      <ul>
        <li>
          <a href="#\">Login</a>
        </li>
        <li>
          <a href="#\">Sign up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
