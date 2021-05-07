import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";
import { auth } from "../fireBase";

//
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword( email, password)
    .then(()=>{
      history.push('/');
    });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          if(auth){
            history.push('/')
          }
      })
      .catch((err) => alert(err.message));
  };

  //
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
          className="login_logo"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required/>

          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="signIn_button" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque
          illum quos. Dolorem nam architecto at labore voluptate saepe
          cumque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          accusamus.
        </p>

        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
