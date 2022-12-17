import React from "react";
import "./Button.css";
function Button(props) {
  const {handleClick, type , name} = props
  return (
    <button
      onClick={ name!== "Delete" ? handleClick: (event)=>{
        let id = (event.target.parentElement.firstChild.getAttribute("headid"));
        handleClick(id);
      }}
      className="btn form-btn"
      type={type}
    >
      {name}
    </button>
  );
}
export default Button;
