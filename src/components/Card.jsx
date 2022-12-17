import React from "react";
import StandupList from "./StandupList";

import "./Card.css";
function Card(props) {
  const { yesterday, today, handleClick, toRender, date, handleTaskStatus, headId } =
    props;
  // const date = new Date();
  // const currentDate =
  //   date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return (
    <div headid = {headId} className="card-container">
      <h3>{date}</h3>
      <StandupList
        handleTaskStatus={handleTaskStatus}
        toRender={toRender}
        standups={yesterday}
        handleClick={handleClick}
        name="Yesterday"
      />
      <StandupList
        handleTaskStatus={handleTaskStatus}
        toRender={toRender}
        standups={today}
        handleClick={handleClick}
        name="Today"
      />
    </div>
  );
}
export default Card;
