import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { googleSignin } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h3>Register</h3>
        <form>
          <input type="email" placeholder="Your email address" />
          <br />
          <input type="password" placeholder="Type password" />
          <br />
          <input type="password" placeholder="Re-Type password" />
          <br />
          <input type="submit" value="submit" />
          <br />
        </form>
        <br />
        <p>
          Already Register? <Link to="/login">Login</Link>
        </p>
        <div>-------------------or---------------------</div>
        <button onClick={googleSignin} className="btn btn-regular">
          Google sign in
        </button>
      </div>
    </div>
  );
};

export default Register;
