import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            First American India
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/todo"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Todo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/album"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Album
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/list"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                List
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/photo"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Photos
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;