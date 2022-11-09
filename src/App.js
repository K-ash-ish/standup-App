import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [standup, setStandup] = useState({
    yesterday: {
      entry: "",
      id: "",
    },
    today: {
      entry: "",
      id: "",
    },
  });
  const [allStandups, setAllStandups] = useState([]);
  function handleInput(event) {
    const { name, value } = event.target;
    setStandup((prevValue) => {
      if (name === "yesterday") {
        return {
          yesterday: {
            entry: value,
            id: uuidv4(),
          },
          today: {
            entry: prevValue.today.entry,
            id: prevValue.today.id,
          },
        };
      } else {
        return {
          today: {
            entry: value,
            id: uuidv4(),
          },
          yesterday: {
            entry: prevValue.yesterday.entry,
            id: prevValue.yesterday.id,
          },
        };
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setAllStandups((prevValue) => {
      return [...prevValue, standup];
    });
  }
  function deleteItem(id, name) {
    setAllStandups((prevStandup) => {
      return prevStandup.filter((standup) => {
        console.log("clicked");
        return name === "yesterday"
          ? standup.yesterday.id !== id
          : standup.today.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <div className="left-container">
          <StandupForm handleSubmit={handleSubmit} handleInput={handleInput} />
        </div>
        <div className="right-container">
          <Card standups={allStandups} deleteItem={deleteItem} />
          <Button type="button" name="Add Standup" />
        </div>
      </main>
    </div>
  );
}

export default App;
