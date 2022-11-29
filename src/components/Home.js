import React from "react";
import StandupForm from "./StadupForm";
import Card from "./Card";
import Button from "./Button";
import About from "./About";
function Home(props) {
  const { handleSubmit, yesterday, today, handleInput } = props;
  const { deleteItem, addAllStandup } = props.handleClick;
  return (
    <div>
      <main className="container">
        <div className="left-container">
          <StandupForm handleSubmit={handleSubmit} handleInput={handleInput} />
        </div>
        <div className="right-container">
          <Card yesterday={yesterday} today={today} handleClick={deleteItem} />
          <Button
            type="button"
            name="Add Standup"
            handleClick={addAllStandup}
          />
        </div>
      </main>
      <About />
    </div>
  );
}
export default Home;
