import React from "react";
import "../css/Products.css";
import { useStateValue } from "../store/StateProvider";

//
const Products = ({ title, image, price, rating, id }) => {
  const [{ name }, dispatch] = useStateValue();

  //
  const addToBasket = async () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title,
        image,
        price,
        rating,
        id,
      },
    });
  };

  //
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}.</p>
        <p className="product_price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket {name}</button>
    </div>
  );
};

export default Products;
