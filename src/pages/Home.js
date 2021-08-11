import React from "react";
import { HomeList, HomeListItem } from "../styles/home";
import { FcSelfServiceKiosk } from "react-icons/fc";

function Home() {
  return (
    <div className="home">
      <div>
        <h1>
          Web Developer Resources <FcSelfServiceKiosk />
        </h1>
        <HomeList>
          <HomeListItem to="/apis">Public APIs</HomeListItem>
          <HomeListItem>Font </HomeListItem>
          <HomeListItem>UI Graphics </HomeListItem>
          <HomeListItem>Design Inspiration</HomeListItem>
        </HomeList>
      </div>
    </div>
  );
}

export default Home;
