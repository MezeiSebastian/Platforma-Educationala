import React from "react";
import styles from "./Home-Menu.module.css";

export default function HomeMenu() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menuList}>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <p className={styles.text}>HomeMenu</p>
          </div>
        </li>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <p className={styles.text}>HomeMenu</p>
          </div>
        </li>
        <li className={styles.listElement}>
          <div className={styles.v1}>
            <p className={styles.text}>HomeMenu</p>
          </div>
        </li>
        <li className={styles.listElement}>
          <div style={{ marginLeft: "20px" }}>
            <p className={styles.text}>HomeMenu</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
