import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

//import axios from './configure-files/axios'
import axios from "axios";
import searchContext from "../../context/SearchContext";

import LoginForm from "./forms/LoginForm";

const Login = () => {
  const history = useHistory();

  //we bring in the store at this point
  const context = useContext(searchContext);

  const {
    setUserInfo,
    email,
    setEmail,
    alertEM,
    alertPW,
    setShowHideButtons,
    setShowLogout,
    currentPage,
    searchAfterLogin
  } = context;



  const [password, setPassWord] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const postReturnedUser = (email, password) => {
    const data = { email, password };
    //console.log(data);

    /// FETCH TO SEND DATA TO BACKEND
    ///axios does not need res.json at all!!!!!!!!!!!!!
    //   axios.post('http://localhost:4000/login', data)
    //   .then(res => {
    //     if(res.data.status === 200){
    //     props.history.push('/profile')
    //     alert('login succeeded!')
    //     return setUserInfo({token: res.data.token, user: res.data.user})
    //   }else{
    //     alert('Oops! try again!')
    //   }
    // }).catch(error=>
    //     console.log(error)
    //   )}

    axios
      .post("http://localhost:4000/login", data)
      .then((res) => {
        console.log(res.data);
        setUserInfo({ token: res.data.token, user: res.data.user });
        if (res.data.status === 400) {
          alert("Oops! try again!");
        } else {
          // history.push("/profile");
          currentPage === "/search" ? searchAfterLogin({ token: res.data.token, user: res.data.user }) : history.push("/profile")
          alert("login succeeded!");
          setShowHideButtons("none");
          setShowLogout("block");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    // const isEmailValid = emailValidator.test(email);

    // if (!isEmailValid) {
    //   setAlertEM(true);
    //   setTimeout(() => {
    //     setAlertEM(false);
    //   }, 5000);
    //   return false;
    // }

    // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/;
    // const isPwValid = pwValidator.test(password);

    // if (!isPwValid) {
    //   setAlertPW(true);
    //   setTimeout(() => {
    //     setAlertPW(false);
    //   }, 5000);
    //   return false;
    // }

    // rememberMe === true
    //   ? saveOnLocal(userInfo.email, userInfo.token)
    //   : console.log("No email nor token saved in the browser");

    postReturnedUser(email, password);

    setEmail("");
    setPassWord("");
    setRememberMe(false);
  };

  //   const saveOnLocal = (key, initialValue) => {
  //     const [value, setValue] = use

  //   useEffect(()=>{

  //   }, [])

  //   saveOnLocal()
  // }

  // const saveOnLocal = (email, password) => {
  //   let data = JSON.parse(localStorage.getItem("user"));

  //   if (data == null) {
  //     data = { email, password };
  //   } else {
  //     data.email = email;
  //     data.password = password;
  //   }

  //   localStorage.setItem("user", JSON.stringify(data));
  //   console.log(data);
  // };

  //set change handlers at the parent level
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePW = (e) => {
    setPassWord(e.target.value);
  };

  const changeRM = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <>
      <LoginForm
        submitHandler={submitHandler}
        changeEmail={changeEmail}
        changePW={changePW}
        changeRM={changeRM}
        email={email}
        password={password}
        rememberMe={rememberMe}
        alertEM={alertEM}
        alertPW={alertPW}
      />
    </>
  );
};

export default Login;
