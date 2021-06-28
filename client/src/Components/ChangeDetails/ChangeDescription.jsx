import React, { useRef, useEffect, useState, useContext } from 'react';
import searchContext from '../../context/SearchContext';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const ChangeDescription = () => {
    const history = useHistory()
    const context = useContext(searchContext)
    const { userInfo, setUserInfo } = context

    console.log(userInfo)
    //states
    const [contactData, setContactData] = useState({

        description: userInfo.user.description
    });

    const { description } = contactData;

    // onChange event listener for all the input fields
    const onChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }

    const postNewDescription = (description) => {

        const data = { description };
        const config = { headers: { authorization: userInfo.token } }
        axios.patch('http://localhost:4000/profile', data, config)
            //we do not need res.json in axios at all
            .then(res => {
                console.log(res.data)
                setUserInfo({ ...userInfo, user: res.data })
                history.push("/profile")
            })
            // in case the API responded, we will have the error inside error.response.data 
            .catch(err => console.log(err.res && err.res.data))
    }


    //Submit event handler
    const formSubmit = () => {
        postNewDescription(description)

    };


    const nameRef = useRef()



    return (
        <>

            <h3>Change description</h3>
            <div className="change_description">
                <div >

                    <br />
                    <div >
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea
                            id="description"
                            className="description"
                            name="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                            placeholder="about me*" rows="7" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-md" onClick={formSubmit}>
                        Submit               </button>

                </div>

                <button className="btn btn-primary btn-md"><Link to="/profile">Back to profile</Link>
                </button>
            </div>


        </>



    )
}

export default ChangeDescription;