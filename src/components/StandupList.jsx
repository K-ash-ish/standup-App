import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";

function StandupList(props) {
  const { name, standups, deleteItem } = props;
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        {standups.map((standup) => {
          return name === "Yesterday" ? (
            <dd
              onClick={(event) => {
                deleteItem(event.target.id, name);
              }}
              key={uuidv4()}
              id={standup.yesterday.id}
              className="list-item"
            >
              {standup.yesterday.entry}
            </dd>
          ) : (
            <dd
              onClick={(event) => {
                deleteItem(event.target.id, name);
              }}
              id = {standup.today.id}
              key={uuidv4()}
              className="list-item"
            >
              {standup.today.entry}
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
