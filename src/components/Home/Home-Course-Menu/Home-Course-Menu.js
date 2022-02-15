import React from "react";
import CourseElement from "./Course-Element/Course-Element";
import styles from "./Home-Course-Menu.module.css";
import { Link } from "react-router-dom";
export default function HomeCourseMenu() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.subtitle}>Cursuri</h1>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li>
            <Link to="/Clasa/1">
              <CourseElement class="I" text="Clasa " color="#11cf86" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/2">
              <CourseElement class="II" text="Clasa " color="#10c27d" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/3">
              <CourseElement class="III" text="Clasa " color="#0da86d" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/4">
              <CourseElement class="IV" text="Clasa " color="#0A8254" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li>
            <Link to="/Clasa/5">
              <CourseElement class="V" text="Clasa " color="#ffce00" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/6">
              <CourseElement class="VI" text="Clasa " color="#C29A01" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/7">
              <CourseElement class="VII" text="Clasa " color="#A88603" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/8">
              <CourseElement class="VIII" text="Clasa " color="#856B03" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li>
            <Link to="/Clasa/9">
              <CourseElement class="IX" text="Clasa " color="#FF0000" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/10">
              <CourseElement class="X" text="Clasa " color="#C20000" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/11">
              <CourseElement class="XI" text="Clasa " color="#A80101" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/12">
              <CourseElement class="XI" text="Clasa " color="#850101" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li>
            <Link to="/Clasa/12">
              <CourseElement class="" text=" exam" color="#0080FF" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/12">
              <CourseElement class="" text=" exam" color="#0061C2" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/12">
              <CourseElement class="" text=" exam" color="#0054A8" />
            </Link>
          </li>
          <li>
            <Link to="/Clasa/12">
              <CourseElement class="" text=" exam" color="#004285" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
