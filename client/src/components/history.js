import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/history.css";

const emailData = [
  {
    to: "sudarsh",
    subject: "internship",
    message:
      "you have been selected for the internship you applied on 6 march 2021",
  },
  {
    to: "Google",
    subject: "GSOC",
    message:
      "you have been selected for the internship you applied on 6 march 2021",
  },
];

const Email = (props) => {
  const { to, subject, message } = props.emailvar;
  return (
    <div className="border px-5">
      <p>{to}</p>
      <p>{subject}</p>
      <p>{message}</p>
    </div>
  );
};

function History() {
  return (
    <div className="history">
      {emailData.map((emails) => {
        return <Email key={emails.id} emailvar={emails} />;
      })}
    </div>
  );
}
export default History;
