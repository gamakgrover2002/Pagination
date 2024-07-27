import React from "react";
import Header from "./Components/Header";
import Fetching from "./APIService/Fetching";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Fetching />
    </div>
  );
}

export default App;
