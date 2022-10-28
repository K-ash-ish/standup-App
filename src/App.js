import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
function App() {
  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setYesterday("");
    setToday("");
  }

  function handleToday(event) {
    setToday(event.target.value);
  }
  function handleYesterday(event) {
    setYesterday(event.target.value);
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <StandupForm
          today={today}
          yesterday={yesterday}
          handleSubmit={handleSubmit}
          handleToday={handleToday}
          handleYesterday={handleYesterday}
        />
        <Card todayStandup={today} yesterdayStandup={yesterday} />
      </main>
    </div>
  );
}

export default App;
