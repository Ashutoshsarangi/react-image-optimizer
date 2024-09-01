import { Outlet, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
