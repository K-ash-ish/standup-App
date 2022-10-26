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
          <dd className="list-item">Hello world world world</dd>
          <dd className="list-item">Hello world world world</dd>
          <dd className="list-item">Hello world world world</dd>
        </dl>
      </div>
      <div className="standup">
        <dl className="standup-list">
          <dt>Today:</dt>
          <dd className="list-item">Hello world world world</dd>
          <dd className="list-item">Hello world world world</dd>
          <dd className="list-item">Hello world world world</dd>
        </dl>
      </div>
    </div>
  );
}
export default Card;
