import React, { useState } from "react";
var FontAwesome = require("react-fontawesome");

function TodayDate() {
  let today = new Date();
  const [date, setDate] = useState(
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
  );
  const handleClick = () => {
    console.log(values);
  };
  const initialValues = {
    newdate: "",
    newmonth: "",
    newyear: "",
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

  return (
    <div className="date">
      <input
        type="text"
        placeholder="date"
        value={values.newdate}
        onChange={handleInputChange}
        name="newdate"
        label="newdate"
      />
      <input
        type="text"
        placeholder="month"
        value={values.newmonth}
        onChange={handleInputChange}
        name="newmonth"
        label="newmonth"
      />
      <input
        type="text"
        placeholder="year"
        value={values.newyear}
        onChange={handleInputChange}
        name="newyear"
        label="newyear"
      />
      <button onClick={() => handleClick()}>schedule</button>

      <FontAwesome name="calendar" />
      {date}
    </div>
  );
}
export default TodayDate;
