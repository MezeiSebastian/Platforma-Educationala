import React from "react";
import CourseElement from "./Course-Element/Course-Element";
import styles from "./Home-Course-Menu.module.css";

export default function HomeCourseMenu() {
  return (
    <div>
      <h1>Pregatire Examen</h1>
      <ul className={styles.list}>
        <li>
          <CourseElement text="Clasa 1" color="#ed1a3b" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
      </ul>
      <h1>Cursuri la clasa</h1>
      <ul className={styles.list}>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
        <li>
          <CourseElement text="Clasa 1" />
        </li>
      </ul>
    </div>
  );
}
