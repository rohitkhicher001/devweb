import React, { useState } from "react";
import axios from "axios";
function Home() {
  const emailData = {
    to: "",
    subject: "",
    message: "",
  };

  const [emailvalues, setEmailvalues] = useState(emailData);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmailvalues({
      ...emailvalues,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { to, subject, message } = emailvalues;
    console.log("rrwg");

    const form = await axios.post("/api/form", {
      to,
      subject,
      message,
    });
  };

  return (
    <div className="home">
      <div>
        <h3>Home</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleInputChange}
            type="email"
            placeholder="To"
            label="recipent"
            value={emailvalues.to}
            name="to"
          />
        </div>

        <div>
          <input type="email" value="rohitkhicher001@gmail.com" />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Subject"
            label="subject"
            value={emailvalues.subject}
            name="subject"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            label="message"
            value={emailvalues.message}
            name="message"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Home;
