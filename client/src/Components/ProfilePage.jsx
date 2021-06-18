import React, { useContext } from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import SearchContext from "../context/SearchContext"
import '../styles/scss/Profile.scss'

//npm install react-router-dom

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = (props) => {

    const context = useContext(SearchContext)
    const { userInfo } = context

    return (

        <div className="app_body">
            {userInfo.token ? <Card aboutUs={userInfo.user.description} skills={userInfo.user.skills} /> : props.history.push("/")}


        </div>
    );
};

export default ProfilePage;