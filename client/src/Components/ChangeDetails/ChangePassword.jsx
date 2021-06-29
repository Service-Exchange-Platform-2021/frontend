import React, { useRef, useEffect, useContext } from "react"
// import MyAlert from "../userControl/layout/Alert";
import SearchContext from "../../context/SearchContext";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const ChangePassword = () => {

    const history = useHistory()
    const context = useContext(SearchContext)
    const {
        userInfo,
        newPassword,
        setNewPassword,
        confirmNewPW,
        setConfirmNewPW,
    } = context

    //the axios.create does not work, why?
    const updatePW = async () => {
        try {
            const config = {
                headers: {
                    authorization: 'Bearer ' + userInfo.token,
                    "Content-Type": "application/json"
                },
            };
            const data = { newPassword };
            const response = await axios.post(
                'http://localhost:4000/profile/change_password',
                data,
                config
            );

            if (response) {
                alert('Your password has been changed! Remember to use your new password next time you log in ')
            }
        } catch (err) {
            console.log(`Something went wrong ${err}`);
        }
    }

    const changePassWord = (e) => {
        setNewPassword(e.target.value);
    }

    const changeConfirmPW = (e) => {
        setConfirmNewPW(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        const isPwValid = pwValidator.test(newPassword);

        if (!isPwValid) {
            alert('please follow the instruction of setting password')
        }

        if (newPassword !== confirmNewPW) {
            alert('inconsistent password!')
        }

        //     const url = `http://localhost:4000/profile`
        //     const authAxios = axios.create({
        //             baseURL: url,
        //             // const config = { headers: { authorization: 'Bearer '+userInfo.token } }
        //             headers: { authorization: 'Bearer '+userInfo.token, 
        //                        "Content-Type": "application/json" },  
        //             body: newPassword                        
        //         }) 

        //     const updatePW = async()=>{
        //             try{
        //                 const result = await authAxios.post('/change_password/')
        //                 console.log(result)
        //             } catch(err)
        //             { console.log(err.message) }
        //         }

        if (isPwValid && (newPassword === confirmNewPW)) {
            updatePW();
        }

        setNewPassword("");
        setConfirmNewPW("");
    }

    return (

        <div className="password-body">
            <form onSubmit={submitHandler}>

                <div className="form-group col-lg-12">
                    <label>
                        New Password (8-12 characters, at least 1 uppercase, 1 lowercase, 1
                        number, 1 special character. No Whitespace)
                                         </label>
                    <br />
                    <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        placeholder="Please ensure you follow the password setting request"
                        className="form-control"
                        onChange={changePassWord}
                        required
                    />
                </div>

                <div className="form-group col-lg-12">
                    <label className="mb-4">Confirm Password</label>
                    <br />
                    <input
                        type="password"
                        name="confirmNewPassword"
                        value={confirmNewPW}
                        placeholder="Please confirm your password"
                        className="form-control"
                        onChange={changeConfirmPW}
                        required
                    />
                </div>

                <div className="form-group col-lg-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-sm">
                        Submit
                    </button>
                </div>

                <div className="form-group col-lg-12 d-flex justify-content-center">
                    <button className="btn btn-primary btn-md"><Link to="/profile">Back to profile</Link>
                    </button>
                </div>

            </form>

        </div>

    );
};

export default ChangePassword;