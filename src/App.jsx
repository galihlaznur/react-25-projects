import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ColorGenerator from "./components/color-generator/ColorGenerator";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Accordion</Link> | <Link to="/color-generator">ColorGenerator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
      </Routes>
    </>
  );
}

export default App;
