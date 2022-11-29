import React from "react";
import StandupList from "./StandupList";

import "./Card.css";
function Card(props) {
  const { yesterday, today, handleClick } = props;
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return (
    <div className="card-container">
      <h3>{currentDate}</h3>
      <StandupList
        standups={yesterday}
        handleClick={handleClick}
        name="Yesterday"
      />
      <StandupList
        standups={today}
        handleClick={handleClick}
        name="Today"
      />
    </div>
  );
}
export default Card;
