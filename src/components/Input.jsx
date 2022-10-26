import React from "react";
function Input(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.input}>{props.input}:</label>
      <input type="text" id={props.input} />
    </div>
  );
}
export default Input;
