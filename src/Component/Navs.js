import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];
const Nav = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          {LINKS.map((links) => {
            return (
              <li key={links.to}>
                <Link to={links.to}>{links.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
