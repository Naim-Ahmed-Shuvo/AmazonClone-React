import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./comps/Checkout";
import Header from "./comps/Header";
import Home from "./comps/Home";
import Login from "./comps/Login";
import { auth } from "./fireBase";
import { useStateValue } from "./store/StateProvider";

//
function App() {

  const [{},dispatch] = useStateValue();

  //
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser: ",authUser);

      if (authUser) {
        //login
        dispatch({
          type: "SET_USER",
          user: authUser
        })
        
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
