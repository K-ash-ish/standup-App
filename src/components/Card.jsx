import React from "react";
import "./Card.css";
function Card(props) {
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  console.log(currentDate);
  return (
    <div className="card-container">
      <h3>{currentDate}</h3>
      <div className="standup">
        <dl className="standup-list">
          <dt>Yesterday:</dt>
          <dd className="list-item">New Standup Item</dd>
          <dd className="list-item">New Standup Item</dd>
          <dd className="list-item">New Standup Item</dd>
        </dl>
      </div>
      <div className="standup">
        <dl className="standup-list">
          <dt>Today:</dt>
          <dd className="list-item">New Standup Item</dd>
          <dd className="list-item">New Standup Item</dd>
          <dd className="list-item">New Standup Item</dd>
        </dl>
      </div>
    </div>
  );
}
export default Card;
