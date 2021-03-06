import React, { useState } from "react";
import Birthday from "./Birthday";
import "../stylesheets/App.scss";

const App = (props) => {
  const [counter, setCounter] = useState(20);
  const handleCount = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="wrapper">
      <Birthday handleCount={handleCount} counter={counter} />
    </div>
  );
};

export default App;
