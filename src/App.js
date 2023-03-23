import "./App.css";
import "../src/components/Hero/Hero";
import Hero from "../src/components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <span style={{ color: "white" }}>
        <Hero />
      </span>
    </div>
  );
}

export default App;
