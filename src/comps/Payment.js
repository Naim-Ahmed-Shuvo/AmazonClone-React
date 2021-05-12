import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import "../css/Payment.css";
import { getBasketTotal } from "../store/reducer";
import { useStateValue } from "../store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

//
const Payment = () => {
  const [{ user, basket }] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("Secret is>>>> " + clientSecret);

  //
  const stripe = useStripe();
  const elements = useElements();

  //
  const handleSubmit = async (event) => {
    //
    event.preventDefault();
    
    setProcessing(true);

    //
    const payload = stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({paymentIntent}) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/order");
      });
  };

  //
  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  //
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* address section */}
        <div className="payment_section">
          <div className="payment_title">
            <h4>Delivery Address</h4>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Web lake ,US</p>
          </div>
        </div>

        {/* review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h2>review and Items delivery</h2>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h2>Payment Method</h2>
          </div>
          <div className="payment_details">
            <form  onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="paymentprice_container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h1>Order total : {value}</h1>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  thousandSeparator={true}
                  prefix={"$"}
                  displayType="text"
                />
                <button disabled={processing || disabled || succeeded} type="submit">
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
