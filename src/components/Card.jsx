import React from "react";
import "./Card.css";
function Card(props) {
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return (
    <div className="card-container">
      <h3>{currentDate}</h3>
      <div className="standup">
        <dl className="standup-list">
          <dt className="list-heading">Yesterday:</dt>
          <dd className="list-item">{props.yesterdayStandup}</dd>
        </dl>
      </div>
      <div className="standup">
        <dl className="standup-list">
          <dt className="list-heading">Today:</dt>
          <dd className="list-item">{props.todayStandup}</dd>
        </dl>
      </div>
    </div>
  );
}
export default Card;
