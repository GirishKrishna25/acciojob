import React from "react";
import "./Products.css";
import Card from "./components/Card";

export default function Products(props) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(function () {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(Object.values(data)));
  }, []);

  return (
    <>
      <h3 className="products-heading">Products</h3>
      <div className="products-container">
        {products.map((item, index) => (
          <Card key={index} data={item} addToCart={props.addToCart} />
        ))}
      </div>
    </>
  );
}
