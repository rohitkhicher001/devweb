import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="signup">
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
        <Link to="/">Signup</Link>
      </div>
    </div>
  );
}
export default Signup;
