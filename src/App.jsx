import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ExperienceProjects from "./pages/ExperienceProjects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/experienceProjects" element={<ExperienceProjects />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
