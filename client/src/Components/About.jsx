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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              sapiente soluta necessitatibus vel officiis natus neque doloribus,
              deleniti ullam optio voluptatibus dolores nostrum aut et
              recusandae quaerat incidunt quidem nesciunt. Iusto aliquam modi
              nulla voluptate repellendus voluptatibus perferendis eos ea ullam
              molestias ex beatae fugiat, magnam non dolorem dicta, illo ipsum
              doloribus dolore id amet! Nobis dolorum ipsa adipisci at?
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              sapiente soluta necessitatibus vel officiis natus neque doloribus,
              deleniti ullam optio voluptatibus dolores nostrum aut et
              recusandae quaerat incidunt quidem nesciunt. Iusto aliquam modi
              nulla voluptate repellendus voluptatibus perferendis eos ea ullam
              molestias ex beatae fugiat, magnam non dolorem dicta, illo ipsum
              doloribus dolore id amet! Nobis dolorum ipsa adipisci at?
            </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
    </div>
   
    </>
     );
};

export default About;
