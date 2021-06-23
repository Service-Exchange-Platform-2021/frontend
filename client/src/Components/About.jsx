import React from "react";

import { Card, CardDeck } from "react-bootstrap";
import { FaRegCompass, FaMedapps } from "react-icons/fa";

const About = () => {
  return (
    <>
    <div id="aboutUs" className="about">     
      <CardDeck  style={{textAlign:"center",marginTop:"1rem"}} className="about-card-deck">       
        <Card style={{lineHeight:"32px"}} className="about-card">
          <Card.Body className="about-card-body">
            <FaRegCompass className="icons" />
            <Card.Title className="about-card-title">
              Mission
            </Card.Title>
            <Card.Text className="about-card-text">
            Our mission is to connect people from all over the world in order to share skills and even more than that: form reliable networks. We base our work on the 4 Es: Exchange of Professionalism and
Expertise, Establishment of Human Interaction and Connection, Enhancement and Improvement of Human Communication, Empowerment of the Individual.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{lineHeight:"32px"}} className="about-card">
          <Card.Body style={{textAlign:"center"}} className="about-card-body">
            <FaMedapps className="icons" />
            <Card.Title className="about-card-title">
              Vision
            </Card.Title>
            <Card.Text className="about-card-text">
            Our platfrom aims to be much more than just an App, we envision it as a social media platfrom on which people can interconnect and share their 
             various experiences with our services.
            </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
    </div>
   
    </>
     );
};

export default About;
