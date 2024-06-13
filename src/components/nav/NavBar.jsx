import { Divider, Row } from "antd";
import { Input, Space, Button, Popover, Drawer } from "antd";
import "./NavStyle.css";
import { Link } from "react-router-dom";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/photos/logo.png";
import whiteLogo from "../../assets/photos/whiteLogo.png";
import { useState } from "react";
const { Search } = Input;

function NavBar({ isDark, toggolTheme }) {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [open, setOpen] = useState(false);

  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const content = (
    <div className="profileMenu">
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <>
      <Row
        className="navBarBox"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Row style={{ alignItems: "center" }}>
          <AiOutlineAlignLeft
            className="menuItem"
            size={20}
            onClick={showDrawer}
          />
          <Link to="/">
            <img src={whiteLogo} width={100} />
          </Link>
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

          <Link to="/admin">
            <img
              src="https://th.bing.com/th/id/OIP.Uk4qVUlcEEM910ok78UI9wHaIg?rs=1&pid=ImgDetMain"
              className="profilePic"
            />
          </Link>
        </Row>
      </Row>
      <Drawer
        title=""
        width={250}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <img src={logo} width={200} />
        <Divider />

        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      ;
    </>
  );
}

export default NavBar;
