import React from "react";
import "./Card.css";
function StandupList(props) {
  const { name, standups, deleteItem, idY, idT } = props;
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        {standups.map((standup) => {
          return name === "Yesterday" ? (
            <dd
              onClick={(event) => {
                deleteItem(idY, "yesterday");
              }}
              key={idY}
              id={idY}
              className="list-item"
            >
              {standup.yesterday}
            </dd>
          ) : (
            <dd
              onClick={(event) => {
                deleteItem(idT, "today");
              }}
              key={idT}
              id = {idT}
              className="list-item"
            >
              {standup.today}
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
