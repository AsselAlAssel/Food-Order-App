import React from "react";
import classes from "./Button.module.scss";
const Button = (props) => {
  const className = `${classes.button} ${props.className}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
