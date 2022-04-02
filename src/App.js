import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/DemoOutput";

import "./App.css";

function App() {
  const [toggleButton, settoggleButton] = useState(false);
  const [allowToggler, setallowToggler] = useState(false);

  const changeToggleButtonHandler = useCallback(() => {
    if (allowToggler) {
      settoggleButton((prev) => !prev);
    }
  }, [allowToggler]);
  
  const allowTogglerHandler = () => {
    setallowToggler(true);
  };
  console.log("App Component");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={toggleButton} />
      <Button onClick={allowTogglerHandler}>Allow Toggler</Button>
      <Button onClick={changeToggleButtonHandler}>Click Here</Button>
    </div>
  );
}

export default App;
