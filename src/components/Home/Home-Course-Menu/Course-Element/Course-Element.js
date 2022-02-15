import React from "react";
import styles from "./Course-Element.module.css";

export default function CourseElement(props) {
  const hoverHandler = (e) => {
    e.target.style.background = "white";
  };
  const outHandler = (e) => {
    e.target.style.background = "";
  };

  return (
    <div style={{ backgroundColor: props.color }} className={styles.wrapper1}>
      <div>
        <span
          onMouseEnter={hoverHandler}
          onMouseLeave={outHandler}
          className={styles.dot}
        >
          ➔
        </span>
      </div>
      <p className={styles.text}>
        {props.text}
        <b>{props.class}</b>
      </p>
    </div>
  );
}
