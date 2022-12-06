import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function StandupList(props) {
  const { name, standups, handleClick } = props;
  function deleteListItem(event) {
    let target = event.target.parentNode.parentNode.parentNode;
    handleClick(target);
  }
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        {standups.map((data) => {
          return name === "Yesterday" ? (
            <dd key={uuidv4()} id={data.id} className="list-item">
              <div className="item">
                {data.standup}
                <FontAwesomeIcon
                  className="delete"
                  onClick={(event) => {
                    deleteListItem(event);
                  }}
                  icon={faTrash}
                />
              </div>
            </dd>
          ) : (
            <dd key={uuidv4()} id={data.id} className="list-item">
              <div className="item">
                {data.standup}
                <FontAwesomeIcon
                  className="delete"
                  onClick={(event) => {
                    deleteListItem(event);
                  }}
                  icon={faTrash}
                />
              </div>
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
