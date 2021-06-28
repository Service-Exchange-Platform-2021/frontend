import React, { useRef, useEffect, useContext } from "react"

import MyAlert from "../userControl/layout/Alert";
import SearchContext from "../../context/SearchContext";
import { Link } from "react-router-dom";


const ChangePassword = (props) => {

    const context = useContext(SearchContext)

    return (

        <div className="password-body">
            <form onSubmit={props.submitHandler}>

                <div className="form-group col-lg-12">
                    <label>
                        New Password (8-12 characters, at least 1 uppercase, 1 lowercase, 1
                        number, 1 special character. No Whitespace)
                                         </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={props.password}
                        placeholder="Please ensure you follow the password setting request"
                        className="form-control"
                        onChange={props.changePassWord}
                        required
                    />
                </div>

                <div className="form-group col-lg-12">
                    <label>Confirm Password</label>
                    <br />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={props.confirmPW}
                        placeholder="Please confirm your password"
                        className="form-control"
                        onChange={props.changeConfirmPW}
                        required
                    />
                </div>

                <div className="form-group col-lg-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-md">Submit</button>
                </div>

                <div className="form-group col-lg-12 d-flex justify-content-center">
                    <button className="btn btn-primary btn-md"><Link to="/profile">Back to profile</Link>
                    </button>
                </div>
                <div className="form-group col-lg-9">
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
                            alertHeading={"Error!"}
                            alertMessage={"Please Enter A Valid Password "}
                        />
                    )}
                    {props.alertPWCheck && (
                        <MyAlert
                            alertType={"warning"}
                            alertHeading={"Error!"}
                            alertMessage={"Inconsistent Password!"}
                        />
                    )}
                </div>

            </form>

        </div>

    );
};

export default ChangePassword;
