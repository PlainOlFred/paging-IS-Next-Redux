import React from "react";
import "./AppNavbar.css";

const AppNavBar = props => {
  return (
    <header className="AppNavbar">
      <nav className="navbar">
        <div></div>
        <div>Pagination Scroll</div>
        <div>
          <ul className="navItems">
            <li><a href="/">Passage</a></li>
            <li><a href="/">Problems</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default AppNavBar;