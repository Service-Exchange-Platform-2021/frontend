import React, { useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import Main from '../../Main'
import MyAlert from "../layout/Alert";
import ButtonMU from "../layout/ButtonMU";

//import FontAweSomeIcon and library modules, then set up your own icon library to avoid overloading with other unused icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";

// import {
//   faGoogle,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(
//   faGoogle,
//   faFacebook,
//   faTwitter,
// );

const LoginForm = (props) => {

  const emailRef = useRef()

  useEffect(()=> {
    emailRef.current.focus();
  }, [])

  return (
    <>
      <div className="backLogin">
        <div className="div-center">
          <div className="container">
            <div className="card-body">
              <div className="d-flex justify-content-end">
                <ButtonMU
                  buttonVariant={"outlined"}
                  buttonColor={"primary"}
                  buttonSize={"small"}
                />
              </div>

              {/* <div className="row">
                <div className="col-lg-10">
                  {props.alertEM && (
                    <MyAlert
                      alertType={"warning"}
                      alertHeading={"Error!"}
                      alertMessage={"Please Enter A Valid Email "}
                    />
                  )}
                  {props.alertPW && (
                    <MyAlert
                      alertType={"danger"}
                      alertHeading={"Incorrect!"}
                      alertMessage={"Please Enter A Valid Password "}
                    />
                  )}
                </div>
              </div> */}

              <form onSubmit={props.submitHandler}>
                <fieldset>
                <br />
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label>Your Email</label>

                      <input
                        type="text"
                        name="email"
                        ref={emailRef}
                        placeholder="email"
                        className="form-control"
                        value={props.email}
                        onChange={props.changeEmail}
                        required
                      />
                    </div>

                    <div className="form-group col-lg-6">
                      <label>Your Password</label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="form-control"
                        value={props.password}
                        onChange={props.changePW}
                        required
                      />
                    </div>

                    <div className="form-check form-group ml-4 col-lg-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={props.rememberMe}
                        onChange={props.changeRM}
                        //in theory onClick should be used but Chrome prefers onChange here
                      />
                      <label> Remember Me </label>
                    </div>

                    <div className="form-check form-group col-lg-3">
                      <button type="submit" className="btn btn-primary btn-sm"
                      >
                        Login
                      </button>
                    </div>

                    <div className="form-check form-group mx-auto col-lg-5">
                      <Link to="/forget_password">
                        <a href="#"> Forgot Your Password?</a>     
                      </Link>
                    </div>                   

                    <h6 className="col-lg-12 mx-auto text-center">
                      If you have not already registered with us, register and
                      <br /> 
                      <Link to="/register">
                        <h6><a href="#" className="mt-3 btn btn-primary btn-sm"> join us</a></h6>     
                      </Link>                       
                    </h6>

                <div className="row">
                  <div className="col-lg-12">
                    {props.alertEM && (
                      <MyAlert
                        alertType={"warning"}
                        alertHeading={"Error!"}
                        alertMessage={"Please Enter A Valid Email "}
                      />
                    )}
                    {props.alertPW && (
                      <MyAlert
                        alertType={"danger"}
                        alertHeading={"Incorrect!"}
                        alertMessage={"Please Enter A Valid Password "}
                      />
                    )}
                  </div>
                </div>

            {/*                 
                    <div className="form-check form-group mx-auto" aria-label="buttonExample"> 
                      <button 
                        type="button" 
                        className="btn btn-primary">
                        <a href="#"></a>
                        <FontAwesomeIcon
                          icon={["fab", "google"]}
                          size="1x"
                        />
                      </button>
                      </div>

                      <div className="form-check form-group mx-auto">
                      <button 
                        type="button" 
                        className="btn btn-warning">
                        <a href="#"></a>
                        <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
                      </button>
                      </div>
                      
                      <div className="form-check form-group mx-auto">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ color: "white" }}
                      >
                        <a href="#"></a>
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
                      </button>
                      </div>                    */}
                    </div>                  
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
