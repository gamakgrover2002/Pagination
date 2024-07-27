import React from "react";
import Logo from "./logo.svg";

function Header() {
  return (
    <header className="heading">
      <img src={Logo} alt="Logo" />
      <ul className="navs">
        <li>Products</li>
        <li>Electronic</li>

        <li>About</li>
      </ul>
      <div id="btn-group">
        <button className="btn">Login</button>
        <button className="btn">Register</button>
      </div>
    </header>
  );
}

export default Header;
