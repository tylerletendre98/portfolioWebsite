import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <h1>this is my router</h1>
      <Link to="/aboutMe">
        <button>about me</button>
      </Link>
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
