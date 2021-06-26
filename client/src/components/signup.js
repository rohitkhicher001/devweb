import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signup.css";

function Signup() {
  const history = useHistory();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmpassword } = values;
    const res = await fetch("./signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid registration");
    } else {
      window.alert("Registration successful");
      history.push("/login");
    }
  };

  return (
    <div className="container border rounded signup">
      <div className="d-flex justify-content-center  p-4 px-2">
        <div className="col-12">
          <form method="POST">
            <p className="h2 text-center mb-4 ml-4">Sign up</p>
            <div className="m-3 w-100">
              <input
                id="defaultFormRegisterFirstNameEx"
                className="form-control text-center"
                onChange={handleInputChange}
                type="text"
                placeholder="first name"
                label="firstname"
                value={values.firstname}
                name="firstname"
              />
            </div>
            <div className="m-3 w-100">
              <input
                className="form-control text-center"
                onChange={handleInputChange}
                type="text"
                placeholder="last name"
                label="lastname"
                value={values.lastname}
                name="lastname"
              />
            </div>

            <div className="m-3 w-100">
              <input
                className="form-control text-center"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                label="email"
                value={values.email}
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
                value={values.password}
                name="password"
              />
            </div>
            <div className="m-3 w-100">
              <input
                className="form-control text-center"
                onChange={handleInputChange}
                type="password"
                placeholder="confirm password"
                label="confirmpassword"
                value={values.confirmpassword}
                name="confirmpassword"
              />
            </div>
            <div className="text-center mt-4 ml-5">
              <Link
                className="btn btn-primary w-100"
                color="unique"
                to="/"
                onClick={PostData}
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
