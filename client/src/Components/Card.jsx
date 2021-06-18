import React, { useState, useContext } from 'react';
import ChangePassword from "./ChangeDetails/ChangePassword";
import ChangeDetails from "./ChangeDetails/ChangeDetails";
import ChangeDescription from './ChangeDetails/ChangeDescription';
import searchContext from '../context/SearchContext';
import { Link } from "react-router-dom";
import '../styles/scss/Card.scss'
import { Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';





function Card(props) {
    const [name, setName] = useState("User Name");
    const [about, setAbout] = useState("About me");
    const [looking, setLooking] = useState("I'm looking for");
    const [offer, setOffer] = useState("I can offer");

    const context = useContext(searchContext)
    const { userInfo } = context

    return (
        <div className="Card">
            <div className="upper-container">

                <div className="user-name"> <h3>{userInfo.user.username}</h3>
                </div>


                <div className="image-container">
                    <img src={userInfo.user.avatar_url} alt="" height="100px" width="100px" />

                </div>

            </div>
            <div className="lower-container">


                <Route path="/profile" exact >
                    <div className="flex-grid">
                        <div className="user-information">

                            <h4>{about}</h4>
                            <p>{props.aboutUs}</p>
                            <br />
                            <Button goToMenu="profile/change_description"><Link to="profile/change_description">Change description</Link></Button>






                        </div>
                        <div className="about-container">

                            <h4>{offer}</h4>
                            {props.skills.map(skill => <p key={skill.id}>{skill.value}</p>)}

                            <h4>{userInfo.user.country}</h4>
                            <p>{props.country}</p>
                            <h4>{userInfo.user.region}</h4>
                            <p>{props.region}</p>

                            <Button goToMenu="profile/change_details"><Link to="profile/change_details">Change details</Link></Button>
                            <Button goToMenu="profile/change_password"><Link to="profile/change_password">Change password</Link></Button>


                        </div>
                    </div>
                </Route>
                <Route path="/profile/change_details" component={ChangeDetails} />
                <Route path="/profile/change_password" component={ChangePassword} />
                <Route path="/profile/change_description" component={ChangeDescription} />




            </div>


        </div>
    )

}
export default Card;
