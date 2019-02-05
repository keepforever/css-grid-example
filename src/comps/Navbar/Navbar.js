import React from "react";
import { Link } from 'react-router-dom';

import config from '../../config';
import s from "./navbar.module.css";

export default props => {
  const { links } = config;
  return (
    <nav className={s.grid}>
      {links.map(l => {
        return (
          <Link key={l.text} to={l.to}>
            {l.text}
          </Link>
        );
      })}
    </nav>
  );
};
