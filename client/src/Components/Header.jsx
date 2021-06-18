import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import FindMenuLarge from "./FindMenuLarge";
import Context from "../context/SearchContext";
import axios from "axios";

const Header = () => {
  const context = useContext(Context);
  const {
    setItemSkills,
    country,
    region,
    lookSelection,
    userInfo,
    setSearchResults,
    setShowSkillsSelection,
    show,
    setShow,
    goLogin,
    goRegister,
    goLogOut,
    showHideButton,
    showLogout,
    goProfile
  } = context;

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:4000/itemSkills")
      .then((res) => {
        setItemSkills(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goSearch = () => {

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

  
  return (
    <>
      <div className="find">
        <FindMenuLarge goSearch={goSearch} />
        <div className="btn-group LogRegLarge" role="group">
          <button
            onClick={goLogin}
            className="btn log"
            style={{ display: showHideButton }}
          >
            Login
          </button>

          <button
            onClick={goRegister}
            className="btn log"
            style={{ display: showHideButton }}
          >
            Register
          </button>

          <button 
          onClick={goLogOut} 
          className="btn log" 
          style={{ display: showLogout }}
          >
            Logout
          </button>

          <button 
          onClick={goProfile} 
          className="btn log" 
          style={{ display: showLogout }}
          >
            Profile
          </button>

          {userInfo.user && <img 
          width="30px"
          height="30px"
          src={userInfo.user.avatar_url} alt="avatar" style={{ display: showLogout }}/> }

          <div className="btn-group LogRegSmall" role="group">
            <button>EN</button>
            <button>DE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
