import "./App.css";
import "../src/components/Hero/Hero";
import Hero from "../src/components/Hero/Hero";
// import program from "./components/program/program";
import Programs from "./components/program/program";
// import Reasons from "./components/Process/reasons";
import Reason from "./components/Process/Reason";
import Plans from "./components/Plans/plans";
import Testimonial from "./components/Testimonial/Testimonial";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
// ("../src/components/program/program");
function App() {
  return (
    <div className="App">
      <span style={{ color: "white" }}>
        <Hero />
        <Programs />
        <Reason />
        <Plans />
        <Testimonial />
        <Join />
        <Footer />
      </span>
    </div>
  );
}

export default App;
