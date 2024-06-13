import "./App.css";
import NavBar from "./components/nav/NavBar";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme;
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) =>
      prevTheme === true ? "dark-theme" : "light-theme"
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={HomePage}></Route>
        <Route path="/profile" exact Component={Profile}></Route>
        <Route path="/admin" exact Component={Dashboard}></Route>
      </Routes>
    </Router>
  );
}

export default App;
