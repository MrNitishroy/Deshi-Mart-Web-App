import { Row, Col } from "antd";
import CategoryModel from "../../../models/CategoryModel";
import "./HomeComponentStyle.css";
import food from "../../../assets/photos/Category/food.png";
import animal from "../../../assets/photos/Category/animal.png";
import cloth from "../../../assets/photos/Category/fasion.png";
import electronic from "../../../assets/photos/Category/electronic.png";
import SubCategoryModel from "../../../models/SubCategoryModel";
// import food from "../../../assets/photos/Category/food.png";
function CategoryWidget() {
  var categories = [
    new CategoryModel("1", "Food", food, [
      new SubCategoryModel("1", "Fruits"),
      new SubCategoryModel("2", "Vegetables"),
    ]),
    new CategoryModel("2", "Animals", animal, [
      new SubCategoryModel("1", "Mammals"),
      new SubCategoryModel("2", "Reptiles"),
    ]),
    new CategoryModel("3", "Clothing", cloth, [
      new SubCategoryModel("1", "Tops"),
      new SubCategoryModel("2", "Bottoms"),
    ]),
    new CategoryModel("4", "Electronics", electronic, [
      new SubCategoryModel("1", "Smartphones"),
      new SubCategoryModel("2", "Computers"),
      new SubCategoryModel("3", "Accessories"),
    ]),
  ];

  return (
    <>
      <Row className="categoryBox" style={{ justifyContent: "space-around" }}>
        {categories.map((e) => {
          return (
            <Row
              className="category"
              style={{ justifyContent: "space-between" }}
            >
              <Col>
                <p className="categoryName">{e.name}</p>
              </Col>
              <img  className="categoryImg" src={e.url}  />
            </Row>
          );
        })}
      </Row>
    </>
  );
}

export default CategoryWidget;
