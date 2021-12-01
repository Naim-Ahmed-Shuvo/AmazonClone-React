import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./comps/Checkout";
import Header from "./comps/Header";
import Home from "./comps/Home";
import Login from "./comps/Login";
import Payment from "./comps/Payment";
import { auth } from "./fireBase";
import { useStateValue } from "./store/StateProvider";
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./comps/Orders";

//
const stripePromise = loadStripe(
  "pk_test_51HO31QCDdOUElv2jAHuwJz2phDZE7WwM93XwyT7NpDiKiOYPsmMzdlkkKkK3WXlJwYUUjp0XlFdi04NcPAfsYgdu00dCMJJnbx"
);

//
function App() {
  const [{}, dispatch] = useStateValue();

  

  //
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser: ", authUser);

      if (authUser) {
        //login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  //
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
               <Payment />
            </Elements>
            
          </Route>
          <Route exact path="/orders">
          <Header />
            <Orders/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
