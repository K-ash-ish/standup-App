import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";
function StandupList(props) {
  const { name, standups } = props;
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        {standups.map((standup) => {
          return name === "Yesterday" ? (
            <dd key = {uuidv4()} className="list-item">{standup.yesterday}</dd>
          ) : (
            <dd key = {uuidv4()} className="list-item">{standup.today}</dd>
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
