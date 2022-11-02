import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./StandupForm.css";

function StandupForm(props) {
  const {handleInput, handleSubmit} = props;
  return (
    <form className="standup-form" onSubmit={handleSubmit}>
      <Input name = "yesterday" input="Yesterday" handleInput={handleInput}  />
      <Input name = "today" input="Today" handleInput={handleInput} />
      <Button name="Submit"  type="submit" />
    </form>
  );
}
export default StandupForm;
