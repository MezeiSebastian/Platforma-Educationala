import React from "react";
import styles from "./Home-Header.module.css";
import Logo from "../../../images/logo.png";

export default function HomeHeader() {
  return (
    <div className={styles.wrapper}>
      {<img src={Logo}></img>}
      <p className={styles.search}>🔎︎</p>
    </div>
  );
}
