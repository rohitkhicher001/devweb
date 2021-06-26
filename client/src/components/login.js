import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const loginData = {
    email: "",
    password: "",
  };

  const [loginvalues, setLoginvalues] = useState(loginData);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginvalues({
      ...loginvalues,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <div>
        <h3>Login</h3>
      </div>

      <form>
        <div>
          <input
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            label="email"
            value={loginvalues.email}
            name="email"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="password"
            placeholder="password"
            label="password"
            value={loginvalues.password}
            name="password"
          />
        </div>
        <div>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
