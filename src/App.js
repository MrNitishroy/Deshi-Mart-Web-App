import "./App.css";
import NavBar from "./components/nav/NavBar";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";

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
    <>
      <NavBar isDark={isDarkTheme} toggolTheme={toggleTheme} />
      <HomePage />
    </>
  );
}

export default App;
