import React from "react";
import styles from "./Home-Menu.module.css";
import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menuList}>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <Link className={styles.text} to="/Home">
              Home
            </Link>
          </div>
        </li>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <Link className={styles.text} to="/Despre">
              Despre
            </Link>
          </div>
        </li>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <Link className={styles.text} to="/Clasa">
              Clasa
            </Link>
          </div>
        </li>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <Link className={styles.text} to="/Lectii">
              Lectii
            </Link>
          </div>
        </li>
        <li className={styles.listElement}>
          <div style={{ marginLeft: "20px" }}>
            <Link className={styles.text} to="/Documente">
              Documente
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
