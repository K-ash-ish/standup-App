import React from "react";
function Input(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.input}>{props.input}:</label>
      <input onChange={props.handleInput} type="text" id={props.input} value= {props.value} />
    </div>
  );
}
export default Input;
