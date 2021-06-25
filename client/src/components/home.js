import React from "react";
function Home() {
  return (
    <div className="home">
      <div>
        <h3>Home</h3>
      </div>
      <div>
        <input type="email" placeholder="To" />
      </div>
      <div>
        <input type="email" value="rohitkhicher001@gmail.com" />
      </div>
      <div>
        <input type="text" placeholder="subject" />
      </div>
      <div>
        <input type="text" placeholder="Message" />
      </div>
    </div>
  );
}
export default Home;
