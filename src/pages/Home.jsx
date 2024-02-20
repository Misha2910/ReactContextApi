import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "../components/SingleProduct";
import "../App.css";

faker.seed(100);
const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));
  const [products, setProducts] = useState(productArray);
  // console.log(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id}/>;
      })}
    </div>
  );
};

export default Home;
