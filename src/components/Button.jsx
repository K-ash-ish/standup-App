import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <button
      onClick={props.handleClick}
      className="btn form-btn"
      type={props.type}
    >
      {props.name}
    </button>
  );
}
export default Button;
