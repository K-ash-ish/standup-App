import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";

function StandupList(props) {
  const { name, standups, handleClick } = props;
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        {standups.map((data) => {
          return name === "Yesterday" ? (
            <dd
              onClick={(event) => {
                handleClick(event.target);
              }}
              key={uuidv4()}
              id={data.id}
              className="list-item"
            >
              {data.standup}
            </dd>
            
          ) : (
            <dd
              onClick={(event) => {
                handleClick(event.target);
              }}
              key={uuidv4()}
              id = {data.id}
              className="list-item"
            >
              {data.standup}
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
