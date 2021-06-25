import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div>
        <h3>Login</h3>
      </div>
      <div>
        <input type="email" placeholder="email" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}
export default Login;
