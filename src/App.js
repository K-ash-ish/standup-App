import Navbar from "./components/Navbar";
import "./App.css";
import StandupForm from "./components/StadupForm";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <StandupForm />
        <Card />
      </main>
    </div>
  );
}

export default App;
