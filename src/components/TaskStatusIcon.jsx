import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
function TaskStatusIcon(props) {
  const { handleTaskStatus } = props;
  function Icon(props) {
    const { status, icon, classN } = props;
    return (
      <div
        className="icon"
        onClick={(e) => {
          let item = e.target.parentNode.parentNode.parentNode;
          handleTaskStatus(status, item);
        }}
      >
        <FontAwesomeIcon className={classN} icon={icon} />
      </div>
    );
  }
  return (
    <div className="task-status">
      <Icon status="completed" icon={faCheckCircle} classN="status completed" />
      <Icon status="pending" icon={faXmarkCircle} classN="status pending" />
    </div>
  );
}
export default TaskStatusIcon;
