import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "home" },
  { to: "/starred", text: "Starred" },
  { to: "/error", text: "eror" },
];
const Nav = () => {
  return (
    <>
      <ul>
        {LINKS.map((links) => {
          return (
            <li>
              <Link to={links.to}>{links.text}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Nav;
