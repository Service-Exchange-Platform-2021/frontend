//npm install --save react-background-slideshow
//npm install node-sass --save
import React from "react";

// import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Team from "./Team";
import Chat from "./chat/Chat"
//npm install react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";

import Test from './Test'
import Logout from "./userControl/Logout";
import Context from '../context/SearchContext'


const LandingPage = () => {
 

    return (
        <>
            <div className="wrapper">
                <Main />
                {/* <Test />
                <Logout /> */}
                {/* <Chat /> */}
                <About />                
                <Team />
             </div>
           
        </>
    );
};

export default LandingPage;
