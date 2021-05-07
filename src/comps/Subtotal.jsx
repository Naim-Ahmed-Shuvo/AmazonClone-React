import React from "react";
import CurrencyFormat from "react-currency-format";
import "../css/Subtotal.css";
import { getBasketTotal } from "../store/reducer";
import { useStateValue } from "../store/StateProvider";

const Subtotal = () => {
  const [{basket}] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />  this order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
        displayType="text"
      />
      <button>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
