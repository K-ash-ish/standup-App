import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./StandupForm.css";

function StandupForm(props) {
 const [yesterday, setYesterday] = useState("");
 const [today, setToday] = useState("");
 function handleClick(event) {
    console.log(today);
    console.log(yesterday)
    event.preventDefault();
  }
  function handleToday(event) {
    setToday(event.target.value);
  }
  function handleYesterday(event) {
    setYesterday(event.target.value);
  }
  return (
    <form className="standup-form" onSubmit={handleClick}>
      <Input input="Yesterday" handleInput={handleYesterday} value={yesterday} />
      <Input input="Today" handleInput={handleToday} value={today} />
      <Button name="Submit" handleClick={handleClick} type="submit" />
    </form>
  );
}
export default StandupForm;
