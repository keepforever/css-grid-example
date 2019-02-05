import React, { Component } from "react";
import styles from "./style.module.css";

class Alpha extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>Header</div>
        <div className={styles.sidebar}>Sidebar</div>
        <div className={styles.content}>Content</div>
        <div className={styles.footer}>Footer</div>
      </div>
    );
  }
}

export default Alpha;
