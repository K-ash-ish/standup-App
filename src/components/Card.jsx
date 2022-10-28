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
          <dd className="list-item">New Standup Item</dd>
        </dl>
      </div>
      <div className="standup">
        <dl className="standup-list">
          <dt className="list-heading">Today:</dt>

        </dl>
      </div>
    </div>
  );
}
export default Card;
