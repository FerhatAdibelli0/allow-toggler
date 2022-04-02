import React from "react";
import Myparagraf from "./UI/Button/Myparagraf";

const DemoOutput = (props) => {
  console.log("DemoOutput Component");
  return (
    <Myparagraf>
      {props.show ? (
        <h4>"First you should have clicked Allow Toggler "</h4>
      ) : (
        ""
      )}
    </Myparagraf>
  );
};

export default React.memo(DemoOutput);
