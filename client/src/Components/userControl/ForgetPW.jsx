import React, { useContext } from "react";
//import axios from "./configure-files/axios"
import axios from "axios";
import ForgetPWForm from "./forms/ForgetPWForm";
import searchContext from "../../context/SearchContext";

const ForgetPW = () => {
  
  const context = useContext(searchContext);

  const { email, setEmail, alertEM, setAlertEM } = context;

  const postEmail = (email) => {
    const data = { email };

    axios
      .post("http://localhost:4000/forget_password", data)
      .then(res => {
        console.log(res.data)
        if(res.data.status===200){
         // setUserInfo({token:res.data.token, user:res.data.user})
        alert('A link has been sent to your valid email account with us!')       
        }else{
          alert('This email has not been found!')      
        }    
     })
     // in case the API responded, we will have the error inside error.response.data 
    .catch(error=>alert(error.res && error.res.data))  
  } 

  const submitHandler = (e) => {
    e.preventDefault();

    const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    const isEmailValid = emailValidator.test(email);

    if (!isEmailValid) {
      setAlertEM(true);
      setTimeout(() => {
        setAlertEM(false);
      }, 5000);
      return false;
    }

    postEmail(email);

    setEmail("");
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <ForgetPWForm
        postEmail={postEmail}
        submitHandler={submitHandler}
        changeEmail={changeEmail}
        email={email}
        alertEM={alertEM}
      />
    </>
  );
};

export default ForgetPW;
