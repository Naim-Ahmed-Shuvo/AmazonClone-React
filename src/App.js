import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./comps/Checkout";
import Header from "./comps/Header";
import Home from "./comps/Home";
import Login from "./comps/Login";

//
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login/>
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
