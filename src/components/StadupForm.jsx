import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./StandupForm.css";

function StandupForm(props) {

  return (
    <form className="standup-form" onSubmit={props.handleSubmit}>
      <Input input="Yesterday" handleInput={props.handleYesterday} value={props.yesterday} />
      <Input input="Today" handleInput={props.handleToday} value={props.today} />
      <Button name="Submit"  type="submit" />
    </form>
  );
}
export default StandupForm;
