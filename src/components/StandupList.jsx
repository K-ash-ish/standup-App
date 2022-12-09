import React from "react";
import "./Card.css";
import { v4 as uuidv4 } from "uuid";
import TaskStatusIcon from "./TaskStatusIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function StandupList(props) {
  const { name, standups, handleClick, toRender } = props;
  function deleteListItem(event) {
    let target = event.target.parentNode.parentNode.parentNode;
    handleClick(target);
  }
  function handleTaskStatus(status, item) {
    if (status === "completed") {
      item.style.color = "black";
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
      item.style.color = "red";
    }
  }
  function List(props) {
    const { data, id, taskStatus } = props;
    return (
      <dd key={uuidv4()} id={id} className="list-item">
        <div className="item">
          {data}
          {toRender ? (
            <FontAwesomeIcon
              className="delete"
              onClick={(event) => {
                deleteListItem(event);
              }}
              icon={faTrash}
            />
          ) : (
            <TaskStatusIcon taskStatus = {taskStatus}  handleTaskStatus={handleTaskStatus} />
          )}
        </div>
      </dd>
    );
  }
  return (
    <div className="standup">
      <dl className="standup-list">
        <dt className="list-heading">{name}:</dt>
        {standups.map((data) => {
          console.log(data.taskStatus)
          return name === "Yesterday" ? (
            <List taskStatus = {data.taskStatus} key={uuidv4()} data={data.standup} id={data.id} />
          ) : (
            <List taskStatus = {data.taskStatus} key={uuidv4()} data={data.standup} id={data.id} />
          );
        })}
      </dl>
    </div>
  );
}

export default StandupList;
