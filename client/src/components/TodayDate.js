import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

var FontAwesome = require("react-fontawesome");

function TodayDate() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  var date1 = new Date();
  const [seconds, setSeconds] = useState(0);
  const handleClick = () => {
    var date2 = dateState;
    var seconds = Math.floor(Math.abs(date1 - date2) / 1000);
    setSeconds(seconds);
    console.log(seconds);
    window.alert("your schedule has been saved");
  };
  return (
    <>
      <Calendar value={dateState} onChange={changeDate} />
      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
      <button onClick={handleClick}>Save Schedule</button>
      {seconds}
      <FontAwesome name="calendar" />
    </>
  );
}
export default TodayDate;
