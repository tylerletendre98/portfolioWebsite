import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
