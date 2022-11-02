import React from "react";
import StandupList from "./StandupList";
import "./Card.css";
function Card(props) {
  const {standup} = props;
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return (
    <div className="card-container">
      <h3>{currentDate}</h3>
      <StandupList standup = {standup} name="Yesterday" />
      <StandupList standup = {standup} name="Today" />
    </div>
  );
}
export default Card;
