import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
import Button from "./components/Button";
function App() {
  const [standup, setStandup] = useState({
    yesterday:"",
    today:""
  });
  const [allStandups, setAllStandups] = useState([])
  function handleInput(event){
    const {name, value} = event.target
    setStandup(prevValue=>{
      return {
        ...prevValue,
        [name]:value
      };
    });
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    setAllStandups((prevValue)=>{
      return [...prevValue, standup]
    });
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container">
      <div className="left-container">
        <StandupForm
          handleSubmit={handleSubmit}
          handleInput = {handleInput}
        />
      </div>
      <div className="right-container">
        <Card standups = {allStandups} />
        <Button type = "button" name = "Add Standup"/>
      </div>
      </main>
    </div>
  );
}

export default App;