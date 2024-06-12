import "./HomeStyle.css";
import CategoryWidget from "./components/CategoryWidget";
import HeaderWidget from "./components/HeaderWidget";

function HomePage() {
  return (
    <>
      <HeaderWidget />
      <br />
      <br />
      <CategoryWidget />
    </>
  );
}

export default HomePage;
