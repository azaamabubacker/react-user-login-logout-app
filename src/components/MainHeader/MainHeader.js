import React from "react";

import "../MainHeader/MainHeader.css";
import Navigation from "./Navigation";

function MainHeader(props) {
  return (
    <nav className="navigation">
      <h1>Uber</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </nav>
  );
}

export default MainHeader;
