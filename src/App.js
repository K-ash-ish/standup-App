import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";
function App() {
  
  const [standup, setStandup] = useState({
    yesterday: "",
    today: ""
  });
  const [allStandups, setAllStandups] = useState([]);
  function handleInput(event) {
    const { name, value } = event.target;
    console.log(name)
    setStandup((prevValue) => {
      if(name === "yesterday"){
        
      }
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setAllStandups((prevValue) => {
      return [...prevValue, standup];
    });
  }
  function deleteItem(id) {
    allStandups.filter((standup) => {
      console.log(standup);
      return 0;
    });
    // return setAllStandups(prevValue=>{
    //   prevValue.
    // })
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <div className="left-container">
          <StandupForm handleSubmit={handleSubmit} handleInput={handleInput} />
        </div>
        <div className="right-container">
          <Card
            idY={standup.idY}
            idT={standup.idT}
            standups={allStandups}
            deleteItem={deleteItem}
          />
          <Button type="button" name="Add Standup" />
        </div>
      </main>
    </div>
  );
}

export default App;
