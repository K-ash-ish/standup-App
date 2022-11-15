import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [yStandup, setYStandup] = useState({
    standup: "",
    id: "",
  });
  const [tStandup, setTStandup] = useState({
    standup: "",
    id: "",
  });
  const [yesterday, setYesterday] = useState([]);
  const [today, setToday] = useState([]);
  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "yesterday") {
      setYStandup((prevValue) => {
        return {
          standup: value,
          id: uuidv4(),
        };
      });
    } else {
      setTStandup((prevValue) => {
        return {
          standup: value,
          id: uuidv4(),
        };
      });
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    setYesterday((prevValue) => {
      return [...prevValue, yStandup];
    });
    setToday((prevValue) => {
      return [...prevValue, tStandup];
    });
  }
  function deleteItem(id) {
    setYesterday((prevValue) => {
      return prevValue.filter((standup) => {
        return standup.id !== id;
      });
    });
    setToday((prevValue) => {
      return prevValue.filter((standup) => {
        return standup.id !== id;
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
          <Card yesterday={yesterday} today={today} deleteItem={deleteItem} />
          <Button type="button" name="Add Standup" />
        </div>
      </main>
    </div>
  );
}

export default App;
