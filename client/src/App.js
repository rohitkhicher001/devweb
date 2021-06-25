import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Home />
    </div>
  );
}

export default App;
