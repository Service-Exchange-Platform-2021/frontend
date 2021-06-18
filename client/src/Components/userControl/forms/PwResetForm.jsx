import React, { useRef, useEffect } from 'react';

import Main from '../../Main';
import MyAlert from '../layout/Alert';
import ButtonMU from '../layout/ButtonMU';

const PwResetForm = (props) => {
    const passwordRef = useRef()

    useEffect(()=>{
    passwordRef.current.focus();    
}, [])

    return (
        <>
          <Main />
            <div className="backResetPW">
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

                <form onSubmit={props.submitHandler}>
                <fieldset>
                <br />
                  {/* <div className="form-row"> */}
                    <div className="form-group col-lg-12">
                      <label>Enter Your New Password</label>

                      <input
                        type="password"
                        name="password"
                        ref={passwordRef}
                        placeholder="password"
                        className="form-control"
                        value={props.newPassword}
                        onChange={props.changeNewPW}
                        required
                      />
                    </div>
                {/* </div> */}

                    <div className="form-group col-lg-12">
                      <label>Confirm Your New Password</label>
                      
                      <input
                        type="password"
                        name="passWord"
                        placeholder="password"
                        className="form-control"
                        value={props.confirmNewPW}
                        onChange={props.changeConfirmNewPW}
                        required
                      />
                    </div>
                    <div className="form-check form-group col-lg-3">
                      <button type="submit" className="btn btn-primary btn-sm">
                        Submit
                      </button>
                    </div>

                    <div className="form-group col-lg-12">
                   
                    {props.alertPW && (
                      <MyAlert                      
                        alertType={"danger"}
                        alertHeading={"Please Enter a Valid Password!"}
                        alertMessage={"8-12 characters, at least one uppercase, one lowercase, one special character, one number. No Whitespace"}
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
                </fieldset>
            </form>
                        </div>
                     </div>
                 </div>
             </div>        
        </>
    )
}   

export default PwResetForm