import React from "react";
import Background from "../../../images/Globe.png";
import styles from "./Home-Banner.module.css";

export default function HomeBanner() {
  return (
    <div className={styles.wrapper}>
      {
        <img
          src={Background}
          width="320px"
          style={{
            marginLeft: "120px",
            marginTop: "60px",
            position: "absolute",
          }}
        ></img>
      }
      <p className={styles.title}>
        Bine ati venit pe platforma educationala edu-ONLINE
      </p>
      <p className={styles.subtitle}>
        Proiect facut de Asociatia Inca nu am nume
      </p>
    </div>
  );
}
