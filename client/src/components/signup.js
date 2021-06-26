import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    <div className="signup">
      <form method="POST">
        <div>
          <h3>Signup</h3>
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="first name"
            label="firstname"
            value={values.firstname}
            name="firstname"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="last name"
            label="lastname"
            value={values.lastname}
            name="lastname"
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            label="email"
            value={values.email}
            name="email"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="password"
            placeholder="password"
            label="password"
            value={values.password}
            name="password"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="password"
            placeholder="confirm password"
            label="confirmpassword"
            value={values.confirmpassword}
            name="confirmpassword"
          />
        </div>
        <div>
          <Link to="/" onClick={PostData}>
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Signup;
