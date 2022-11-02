import React from "react";
import StandupList from "./StandupList";
import "./Card.css";
function Card(props) {
  const {standups} = props;
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return (
    <div className="card-container">
      <h3>{currentDate}</h3>
      <StandupList standups = {standups} name="Yesterday" />
      <StandupList standups = {standups} name="Today" />
    </div>
  );
}
export default Card;
