import React from "react";
import Nav from "./Navs.js";
import Title from "./Title.js";

const MainPageLayout = () => {
  return (
    <div>
        <Title title ={"Box Office"} subtitle={"Are you looking for movies or an actor?"}/>
      <Nav />
    </div>
  );
};

export default MainPageLayout;
