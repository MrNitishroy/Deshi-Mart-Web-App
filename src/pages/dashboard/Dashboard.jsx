import { Col, Menu, Row } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./DashboardStyle.css";
import logo from "../../assets/photos/logo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "../admin/AdminPage";
import ProductPage from "../products/ProductPage";
const items = [
  {
    key: "sub1",
    icon: <MailOutlined />,
    label: "Dashboard",
  },
  {
    key: "grp",
    label: "Manage",
    type: "group",
    children: [
      {
        key: "1",
        label: "Products",
        icon: <AppstoreOutlined />,
      },
      {
        key: "2",
        label: "Category",
        icon: <AppstoreOutlined />,
      },
      {
        key: "3",
        label: "Sub-Category",
        icon: <AppstoreOutlined />,
      },
    ],
  },
];
function Dashboard() {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Row className="dashbordBox">
      <Col className="sideBox">
        <Row style={{ justifyContent: "center" }}>
          <img src={logo} width={200} />
        </Row>
        <br />
        <br />
        <Menu
          className="sideMenu"
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Col>

      <Col className="contentBox">
        {" "}
        <Routes>
          <Route path="/admin/dashboard" exact Component={AdminPage}></Route>
          <Route path="/admin/Product" exact Component={ProductPage}></Route>
        </Routes>
      </Col>
    </Row>
  );
}

export default Dashboard;
