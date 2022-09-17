import logo from "./logo.svg";
import "./App.css";
import Altici from "./components/alticci";

function App() {
  const st = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(220, 220, 220, 0.5)",
    marginTop: "50px",
  };
  return (
    <div className="App">
      <div style={st}>
        <Altici />
      </div>
    </div>
  );
}

export default App;
