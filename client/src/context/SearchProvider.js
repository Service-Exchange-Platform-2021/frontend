import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import SearchContext from "./SearchContext";

const SearchProvider = (props) => {

    const [firstname, setFirstName] = useState("");
    const [username, setUserName] = useState("");
    const [country, setCountry] = useState(" ");
    const [region, setRegion] = useState(" ");
    const [offerSelection, setOfferSelection] = useState([]);
    const [lookSelection, setLookSelection] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [showSkillsSelection, setShowSkillsSelection] = useState("block");
    const [newPassword, setNewPassword] = useState("");
    const [password, setPassWord] = useState("");
    const [email, setEmail] = useState("");
    const [alertEM, setAlertEM] = useState(false);
    const [alertPW, setAlertPW] = useState(false);
    const [confirmNewPW, setConfirmNewPW] = useState("");
    const [alertPWCheck, setAlertPWCheck] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [itemSkills, setItemSkills] = useState([]);
    const [show, setShow] = useState("none");
    const [currentPage, setCurrentPage] = useState("/");
    const [showHideButton, setShowHideButtons] = useState("block");
    const [showLogout, setShowLogout] = useState("none");

    const location = useLocation();
    const history = useHistory();

    const selectCountry = (e) => {
        setCountry(e);
    };

    const selectRegion = (e) => {
        setRegion(e);
    };

    const handleOfferSelection = (selection) => {
        setOfferSelection(selection);
    };

    const handleLookSelection = (selection) => {
        setLookSelection(selection);
    };

    console.log('Information about user', userInfo);


    const goLogin = () => {
        if (
            location.pathname !== "/logInPage" &&
            location.pathname !== "/register"
        ) {
            setCurrentPage(location.pathname);
            // setShowHideButtons("none");
            // setShowLogout("block");
        }
        history.push("/logInPage");
    };

    const goRegister = () => {
        if (
            location.pathname !== "/logInPage" &&
            location.pathname !== "/register"
        ) {
            setCurrentPage(location.pathname);
            // setShowHideButtons("none");
            // setShowLogout("block");
        }
        history.push("/register");
    };

    const goProfile = (e) => {
        e.preventDefault();
        history.push("/profile");
    };

    const goLogOut = (e) => {
        e.preventDefault();
        history.push("/");
        setShowHideButtons("block");
        setShowLogout("none");
        setUserInfo({});
    };

    const searchAfterLogin = (userInfo) => {
        const data = { country, region, lookSelection, userInfo };
        axios
            .post("http://localhost:4000/search", data)
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        showHide();
        setShowSkillsSelection("none");
        history.push("/search");
    };

    const showHide = () => {
        if (show === "none") {
            setShow("block");
        } else {
            setShow("none");
        }
    };

    return ( <
        >
        <
        SearchContext.Provider value = {
            {
                country,
                region,
                offerSelection,
                lookSelection,
                setCountry,
                selectCountry,
                setRegion,
                selectRegion,
                handleOfferSelection,
                setOfferSelection,
                handleLookSelection,
                setLookSelection,
                userInfo,
                setUserInfo,
                showSkillsSelection,
                setShowSkillsSelection,
                email,
                setEmail,
                alertEM,
                setAlertEM,
                password,
                setPassWord,
                newPassword,
                setNewPassword,
                alertPW,
                setAlertPW,
                confirmNewPW,
                setConfirmNewPW,
                alertPWCheck,
                setAlertPWCheck,
                searchResults,
                setSearchResults,
                itemSkills,
                setItemSkills,
                show,
                setShow,
                currentPage,
                setCurrentPage,
                goRegister,
                goLogin,
                goLogOut,
                showHideButton,
                setShowHideButtons,
                showLogout,
                setShowLogout,
                goProfile,
                searchAfterLogin,
                firstname,
                setFirstName,
                username,
                setUserName,
            }
        } > { props.children } { " " } <
        /SearchContext.Provider>{" "} < / >
    );

};

export default SearchProvider;