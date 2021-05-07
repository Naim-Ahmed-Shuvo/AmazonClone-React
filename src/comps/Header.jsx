import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { auth } from "../fireBase";
import { useStateValue } from "../store/StateProvider";
import {useHistory} from "react-router-dom";

//
const Header = () => {
  const [{ basket,user }] = useStateValue();
  const history = useHistory();

  const handleAuth = () => {
    if(user){
      auth.signOut();
      history.push('/login');
    }
  }

  //
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="img"
          className="header_logo"
        />
      </Link>

      {/*  */}
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>

      {/*  */}
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option" onClick={handleAuth}>
            <span className="header_option_1">Hello</span>
            <span className="header_option_2">{user? "Sign Out":"Sign In"}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_1">Hello</span>
          <span className="header_option_2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_1">Hello</span>
          <span className="header_option_2">Sign In</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header-basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
