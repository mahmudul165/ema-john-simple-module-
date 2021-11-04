import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";
const Login = () => {
  const { user, googleSignin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  console.log("come from", location?.state?.from);
  const redirectURl = location?.state?.from || "/shop";
  const handleGoogleLogin = () => {
    googleSignin().then((result) => {
      //const user = result.user;
      history.push(redirectURl);
      console.log(user);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h3>Login</h3>
        <form>
          <input type="email" placeholder="Your email address" />
          <br />
          <input type="password" placeholder="Type password" />
          <br />
          <input type="submit" value="submit" />
          <br />
        </form>
        <br />
        <p>
          new to ema-john? <Link to="/register">create new account.</Link>
        </p>
        <div>--------------------or--------------------</div>
        <button onClick={handleGoogleLogin} className="btn btn-regular">
          Google sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
