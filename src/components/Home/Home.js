import React from "react";
//import { Link } from "react-router-dom";
import HomeHeader from "./Home-Header/Home-Header";
import HomeMenu from "./Home-Navbar/Home-Menu";
import HomeBanner from "./Home-Banner/Home-Banner";
import HomeCourseMenu from "./Home-Course-Menu/Home-Course-Menu";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeMenu />
      <HomeBanner />
      <HomeCourseMenu />
      {/* <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Despre">Despre</Link>
          </li>
          <li>
            <Link to="/Clasa">Clasa</Link>
          </li>
          <li>
            <Link to="/Lectii">Lectii</Link>
          </li>
          <li>
            <Link to="/Documente">Documente</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
