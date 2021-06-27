import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";

function Login() {
  const history = useHistory();
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

  const loginHandle = async (e) => {
    const { email, password } = loginvalues;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert(data.error);
      console.log("Invalid");
    } else if (res.status === 500) {
      console.log("Successfull");
      history.push("/");
    }
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container border rounded signup">
        <div className="d-flex justify-content-center  p-4 px-2">
          <div className="col-12">
            <form>
              <p className="h2 text-center mb-4 ml-4">Login</p>
              <div className="m-3 w-100">
                <input
                  className="form-control text-center"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="email"
                  label="email"
                  value={loginvalues.email}
                  name="email"
                />
              </div>
              <div className="m-3 w-100">
                <input
                  className="form-control text-center"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="password"
                  label="password"
                  value={loginvalues.password}
                  name="password"
                />
              </div>
              <div className="text-center mt-4 ml-5">
                <Link
                  className="btn btn-primary w-100"
                  onClick={loginHandle}
                  color="unique"
                  to="/"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
