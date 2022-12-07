import React from "react";
import "./Button.css";
function Button(props) {
  const {handleClick, type , name} = props
  return (
    <button
      onClick={handleClick}
      className="btn form-btn"
      type={type}
    >
      {name}
    </button>
  );
}
export default Button;
