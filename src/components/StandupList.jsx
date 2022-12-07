import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faXmarkCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function StandupList(props) {
  const { name, standups, handleClick, toRender } = props;
  function deleteListItem(event) {
    let target = event.target.parentNode.parentNode.parentNode;
    handleClick(target);
  }
  function handleStatus(progress, item) {
    if (progress === "completed") {
      item.style.color = "black";
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
      item.style.color = "red";
    }
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
                {toRender ? (
                  <FontAwesomeIcon
                    className="delete"
                    onClick={(event) => {
                      deleteListItem(event);
                    }}
                    icon={faTrash}
                  />
                ) : (
                  <div className="task-status">
                    <div
                      onClick={(e) => {
                        let item = e.target.parentNode.parentNode;
                        handleStatus("completed", item);
                      }}
                    >
                      <FontAwesomeIcon
                        className="status completed"
                        icon={faCheckCircle}
                      />
                    </div>
                    <div
                      onClick={(e) => {
                        let item = e.target.parentNode.parentNode;
                        handleStatus("pending", item);
                      }}
                    >
                      <FontAwesomeIcon
                        className="status pending"
                        icon={faXmarkCircle}
                      />
                    </div>
                  </div>
                )}
              </div>
            </dd>
          ) : (
            <dd key={uuidv4()} id={data.id} className="list-item">
              <div className="item">
                {data.standup}
                {toRender ? (
                  <FontAwesomeIcon
                    className="delete"
                    onClick={(event) => {
                      deleteListItem(event);
                    }}
                    icon={faTrash}
                  />
                ) : (
                  <div className="task-status">
                    <div
                      onClick={(e) => {
                        let item = e.target.parentNode.parentNode;
                        handleStatus("completed", item);
                      }}
                    >
                      <FontAwesomeIcon
                        className="status completed"
                        icon={faCheckCircle}
                      />
                    </div>
                    <div
                      onClick={(e) => {
                        let item = e.target.parentNode.parentNode;
                        handleStatus("pending", item);
                      }}
                    >
                      <FontAwesomeIcon
                        className="status pending"
                        icon={faXmarkCircle}
                      />
                    </div>
                  </div>
                )}
              </div>
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
