import React from "react";
import "./Button.css"
function Button(props){
    return <button className="btn form-btn">{props.name}</button>
}
export default Button;
