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
    taskStatus: "",
  });
  const [tStandup, setTStandup] = useState({
    standup: "",
    id: "",
    taskStatus: "",
  });

  const [allStandups, setAllStandups] = useState([
    {
      id: uuidv4(),
      date: "hello",
      newStandup: {
        yesterday: [
          { standup: "one", id: "a;lsdkfjpoq2eirkdfn", taskStatus: false },
          { standup: "two", id: "als;kdfjopweiurn", taskStatus: false },
        ],
        today: [
          {
            standup: "three",
            id: "a;lsdkfjpoq2easdfirkdfn",
            taskStatus: false,
          },
          { standup: "four", id: "a;lsdkfjpoq2sdfeirkdfn", taskStatus: false },
        ],
      },
    }
  ]);
  const [yesterday, setYesterday] = useState([]);
  const [today, setToday] = useState([]);
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "yesterday") {
      setYStandup((prevValue) => {
        return {
          standup: value,
          id: uuidv4(),
          taskStatus: false,
        };
      });
    } else {
      setTStandup((prevValue) => {
        return {
          standup: value,
          id: uuidv4(),
          taskStatus: false,
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
      id: uuidv4(),
      date: currentDate,
      newStandup: {
        yesterday: yesterday,
        today: today,
      },
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
  function deleteStandup(target) {}
  function handleTaskStatus(headId, target, value) {
    // console.log(target)
    setAllStandups((prevValue) => {
      let newValue = [...prevValue];
      newValue.forEach((standups) => {
        if (standups.id === headId) {
          standups.newStandup.today.forEach((standup) => {
            if (standup.id === target) {
              standup.taskStatus = value;
            }
          });
          standups.newStandup.yesterday.forEach((standup) => {
            if (standup.id === target) {
              standup.taskStatus = value;
            }
          });
        }
      });
      return newValue;
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
          element={
            <AllStandups
              handleTaskStatus={handleTaskStatus}
              deleteStandup={deleteStandup}
              allStandups={allStandups}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
