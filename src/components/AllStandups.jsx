import React from "react";
import Card from "./Card";
import "./AllStandups.css";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
function AllStandups(props) {
  const { allStandups, deleteStandup, handleTaskStatus } = props;
  return (
    <section className="all-standups">
      <h2>All Standups</h2>
      <div className="progress-bar">
        <div className="red-box">Active Task: </div>
        <div className="green-box">Completed Task: </div>
      </div>
      <div className="standups-grid">
        {allStandups.map((standup) => {
          return (
            <div key={uuidv4()} className="standup-box">
              <Card
                headId = {standup.id}
                handleTaskStatus={handleTaskStatus}
                date={standup.date}
                toRender={false}
                key={uuidv4()}
                yesterday={standup.newStandup.yesterday}
                today={standup.newStandup.today}
              />
              <Button handleClick={deleteStandup} name="Delete" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default AllStandups;
