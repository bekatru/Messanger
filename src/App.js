import React, { useState } from "react";
// Components
import Layout from "./Layout";
// Data
import { store } from "./data/data";
// Styles
import "./App.scss";
const App = () => {
  const [state, setState] = useState(store);
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
