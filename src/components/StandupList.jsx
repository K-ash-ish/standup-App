import React from "react";
import "./Card.css";

function StandupList(props) {
    const {name, standup} = props;
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        standup
        <dd className="list-item">{props.yesterdayStandup}</dd>
      </dl>
    </div>
  );
}

export default StandupList;
