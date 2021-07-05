//npm install --save react-background-slideshow
//npm install node-sass --save
import React from "react";

// import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Team from "./Team";
import Chat from "./chat/Chat";
//npm install react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <>
      <div id="homeHome">
        <div className="wrapper">
          <Main />
          <About />
          <Team />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
