import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            Blog
          </NavLink>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="posts">Posts</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="new">Add Post</NavLink>
            </li>
          </ul>
          <div className="auth-button">
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
