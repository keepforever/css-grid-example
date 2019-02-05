import React from "react";
import s from "./layout.module.css";
import { Link } from "react-router-dom";

export default ({ children }) => {
  return (
    <div className={s.container}>
      <nav className={s.tempNav}>
        {linksConfig.map(l => {
          return (
            <Link key={l.text} to={l.to}>
              {l.text}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
};

const linksConfig = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/alpha",
    text: "Alpha"
  },
  {
    to: "/beta",
    text: "Beta"
  },
  {
    to: "/theta",
    text: "Theta"
  }
];
