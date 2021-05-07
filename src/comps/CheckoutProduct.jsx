import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "../store/StateProvider";

//
const CheckoutProduct = ({ id, image, title, rating, price }) => {
    const [{},dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id
    })
  };

  //
  return (
    <div className="checkout_product">
      <img src={image} className="checkout_image" alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove Product From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
