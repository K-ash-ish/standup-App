import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
function TaskStatusIcon(props) {
  const { handleTaskStatus, taskStatus } = props;
  function Icon(props) {
    const { icon, classN, btn } = props;
    return (
      <div
        className="icon"
        onClick={ (e) => {
          let value;
          let id = e.target.parentNode.parentNode.parentNode.id;
          let headId =
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute(
              "headid"
            );
          if (btn === "done") {
            value = true;
             handleTaskStatus(headId, id,value );
          } else {
            value = false;
             handleTaskStatus(headId, id,value );
          }
        }}
      >
        <FontAwesomeIcon className={classN} icon={icon} />
      </div>
    );
  }
  return (
    <div className="task-status">
      <Icon
        btn="done"
        taskStatus={taskStatus}
        icon={faCheckCircle}
        classN="status completed"
      />
      <Icon
        btn="notDone"
        taskStatus={taskStatus}
        icon={faXmarkCircle}
        classN="status pending"
      />
    </div>
  );
}
export default TaskStatusIcon;
