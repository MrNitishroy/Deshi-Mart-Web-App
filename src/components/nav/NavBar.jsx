import { Row } from "antd";
import { Input, Space } from "antd";
import "./NavStyle.css";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/photos/logo.png";
import whiteLogo from "../../assets/photos/whiteLogo.png";
const { Search } = Input;

function NavBar({ isDark, toggolTheme }) {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Row
        className="navBarBox"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Row style={{ alignItems: "center" }}>
          <AiOutlineAlignLeft className="menuItem" size={20} />
          <img src={whiteLogo} width={100} />
        </Row>

        <Search
          placeholder="input search text"
          className="searchBox"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Row style={{ alignItems: "center" }}>
          <FiSearch className="menuItem searchButton" />
          <BsCartCheckFill className="menuItem" size={20} />
          <img
            src="https://th.bing.com/th/id/OIP.Uk4qVUlcEEM910ok78UI9wHaIg?rs=1&pid=ImgDetMain"
            className="profilePic"
          />
        </Row>
      </Row>
    </>
  );
}

export default NavBar;
