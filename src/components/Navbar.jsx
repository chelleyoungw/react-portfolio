import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ links }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navList">
        {links.map((link) => {
          const { to, children } = link.props;
          const isActive = to === location.pathname;
          return (
            <li key={to} className={isActive ? "active" : ""}>
              <Link to={to}>{children}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}