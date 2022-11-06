import React from "react";
import StandupList from "./StandupList";
import "./Card.css";
function Card(props) {
  const { standups, deleteItem, idY, idT } = props;
  const date = new Date();
  const currentDate =
    date.getDate() + "/" +( date.getMonth() +1) + "/" + date.getFullYear();
  return (
    <div className="card-container">
      <h3>{currentDate}</h3>
      <StandupList idY = {idY}  standups={standups} deleteItem = {deleteItem} name="Yesterday" />
      <StandupList  idT = {idT} standups={standups} deleteItem = {deleteItem} name="Today" />
    </div>
  );
}
export default Card;
