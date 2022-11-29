import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AllStandups from "./components/AllStandups";
function App() {
  const [yStandup, setYStandup] = useState({
    standup: "",
    id: "",
  });
  const [tStandup, setTStandup] = useState({
    standup: "",
    id: "",
  });
  const [allStandups, setAllStandups] = useState([]);
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
  function addAllStandup() {
    const newStandup = {
      yesterday: yesterday,
      today: today,
    };
    setAllStandups((prevValue) => {
      return [...prevValue, newStandup];
    });
  }
  function deleteItem(target) {
    setYesterday((prevValue) => {
      return prevValue.filter((standup) => {
        return standup.id !== target.id;
      });
    });
    setToday((prevValue) => {
      return prevValue.filter((standup) => {
        return standup.id !== target.id;
      });
    });
  }

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSubmit={handleSubmit}
              handleInput={handleInput}
              yesterday={yesterday}
              today={today}
              handleClick={{
                deleteItem: deleteItem,
                addAllStandup: addAllStandup,
              }}
            />
          }
        ></Route>
        <Route
          path="/allstandups"
          element={<AllStandups allStandups={allStandups} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
