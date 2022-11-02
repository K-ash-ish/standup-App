import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
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
    console.log(allStandups)
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <StandupForm
          handleSubmit={handleSubmit}
          handleInput = {handleInput}
        />
        <Card standup = {allStandups} />
      </main>
    </div>
  );
}

export default App;
