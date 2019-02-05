import React from "react";
import s from "./layout.module.css";
import Navbar from "../Navbar/Navbar";

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={s.container}>
        {children}
      </div>
    </div>
  );
};
