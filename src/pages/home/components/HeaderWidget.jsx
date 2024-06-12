import { Button, Col, Row } from "antd";
import headerImage from "../../../assets/photos/bag.png";
import { FaCartArrowDown } from "react-icons/fa6";
function HeaderWidget() {
  return (
    <>
      <Col className="homeHeroBox">
        <Row style={{ justifyContent: "space-around" }}>
          <Col style={{ alignContent: "center" }}>
            {/* <br /> */}
            <h1 className="largeHeading">
              We bring the store directly to your door, hassle-free delivery.
            </h1>
            <p className="lableMedium">
              Get organic products with fast delivery, making it easy to return.
              Enjoy fresh, healthy choices brought to your door swiftly and
              conveniently, ensuring a seamless shopping experience with our
              reliable return policy.
            </p>
            <br />
            {/* <br /> */}
            <Button className="primaryButtom" icon={<FaCartArrowDown />}>
              SHOP NOW
            </Button>
          </Col>
          <img src={headerImage} width={400} />
        </Row>
      </Col>
    </>
  );
}
export default HeaderWidget;
