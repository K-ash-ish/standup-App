import React from "react";
function Input(props) {
  const {input, handleInput, name, value } = props;
  return (
    <div className="input-field">
      <label htmlFor={input}>{input}:</label>
      <input name = {name} onChange={handleInput} type="text" id={input} value= {value} />
    </div>
  );
}
export default Input;
