import NavBar from "../../components/nav/NavBar";
import "./HomeStyle.css";
import CategoryWidget from "./components/CategoryWidget";
import HeaderWidget from "./components/HeaderWidget";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeaderWidget />
      <br />
      <br />
      <CategoryWidget />
    </>
  );
}

export default HomePage;
