import React, { useState, useContext } from "react";
//import axios from './configure-files/axios'
import axios from "axios";
import searchContext from "../../context/SearchContext";
import { useHistory } from "react-router";
import RegistrationForm from "./forms/RegistrationForm";

const Register = (props) => {
  // const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  // const [username, setUserName] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [preview, setPreview] = useState("");
  const [savedImage, setSavedImage] = useState("");

  //we bring in the store at this point
  const context = useContext(searchContext);
  const history = useHistory()
  const {
    setUserInfo,
    email,
    setEmail,
    password,
    setPassword,
    country,
    setCountry,
    region,
    setRegion,
    alertPW,
    alertPWCheck,
    alertEM,
    offerSelection,
    setOfferSelection,
    itemSkills,
    firstname,
    setFirstName,
    username,
    setUserName,
    setShowHideButtons,
    setShowLogout
  } = context;

  const postNewUser = (
    firstname,
    lastname,
    country,
    region,
    email,
    username,
    password,
    confirmPW,
    savedImage,
    offerSelection,
    
  ) => {
    const data = {
      firstname,
      lastname,
      country,
      region,
      email,
      username,
      password,
      confirmPW,
      savedImage,
      offerSelection,
    
    };
console.log(data);
    axios
      .post("http://localhost:4000/register", data)
      //we do not need res.json in axios at all
      .then(res => {
        setUserInfo({token: res.data.token, user: res.data.user})
        history.push('/profile')
        alert('registration succeeded!')
        setShowHideButtons("none");
        setShowLogout("block");
      })    
      // in case the API responded, we will have the error inside error.response.data 
      .catch(err => {
          console.log(err)
          alert('please try again with a different email account')
      })
  };

  const submitHandler = (e) => {
        e.preventDefault();     


    //email validator source:
    //At least 8 characters long;
    //One lowercase, one uppercase, one number and one special character;
    //No whitespaces. use https://regexr.com/ and https://regex101.com/ for writing up and testing regex
    //source: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a (section 6)

    // const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/
    // const isEmValid = emailValidator.test(email);

    // if(!isEmValid ){
    //     setAlertEM(true)
    //     setTimeout(() => {
    //         setAlertEM(false)
    //     }, 5000);
    //     return false;
    // }

    // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
    // const isPwValid = pwValidator.test(password);

    // if(!isPwValid){
    //     setAlertPW(true)
    //     setTimeout(() => {
    //         setAlertPW(false)
    //     }, 5000);
    //     return false;
    // }

    // if ((isEmValid && isPwValid) && (password!==confirmPW)) {
    //     setAlertPWCheck(true)
    //     setTimeout(() => {
    //         setAlertPWCheck(false)
    //     }, 5000);
    //     return false;
    // }

    postNewUser(
      firstname,
      lastname,
      country,
      region,
      email,
      username,
      password,
      confirmPW,
      savedImage,
      offerSelection,
      
    );

    //  setFirstName("");
    //  setLastName("");
    //  setCountry("");
    //  setRegion("");
    //  setEmail("");
    //  setUserName("");
    //  setPassWord("");
    //  setConfirmPW("");

    //  setPreview(null);
    //  setSavedImage(null);

    //  setOfferSelection([]);
  };

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const changePassWord = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPW = (e) => {
    setConfirmPW(e.target.value);
  };

  const changeCountry = (val) => {
    setCountry(val);
  };

  const changeRegion = (val) => {
    setRegion(val);
  };

  // const onClosing = () => {
  //     console.log('onClose works!')
  //     setPreview(null);
  //     setSavedImage(preview);
  //   }

  const onCrop = (preview) => {
    console.log("onCrop works");
    setPreview(preview);
    setSavedImage(preview);
  };

  const onBeforeFileLoad = (e) => {
    console.log("onBeforeFile works!");
    if (e.target.files[0].size >= 80000) {
      alert("File is too big! The maximal file size is 80 KB");
      e.target.value = "";
    }
  };

  const changeOfferSelection = (selection) => {
    setOfferSelection(selection);
  };

  return (
    <>
      <RegistrationForm
        submitHandler = {submitHandler}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeEmail={changeEmail}
        changeUserName={changeUserName}
        changePassWord={changePassWord}
        changeConfirmPW={changeConfirmPW}
        changeCountry={changeCountry}
        changeRegion={changeRegion}
        changeOfferSelection={changeOfferSelection}
        firstname={firstname}
        lastname={lastname}
        email={email}
        username={username}
        country={country}
        region={region}
        password={password}
        confirmPW={confirmPW}
        offerSelection={offerSelection}
        alertEM={alertEM}
        alertPW={alertPW}
        alertPWCheck={alertPWCheck}
        //props passing to grandchild of Avatar
        // take onClose off to deactivate it
        // onClose = { onClose }
        onCrop={onCrop}
        onBeforeFileLoad={onBeforeFileLoad}
        preview={preview}
        savedImage={savedImage}
        itemSkills={itemSkills}        
      />
    </>
  );
};

export default Register;
