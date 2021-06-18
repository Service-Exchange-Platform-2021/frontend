//install material-ui to use Button
//https://material-ui.com/getting-started/installation/
//npm install @material-ui/core

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const ButtonMU = ({ buttonVariant, buttonColor, buttonSize }) => {
  return (
    <div>
      <Link to="/">
        <Button variant={buttonVariant} color={buttonColor} size={buttonSize}>
          {" "}
         X{" "}
        </Button>
      </Link>
    </div>
  );
};

export default ButtonMU;
