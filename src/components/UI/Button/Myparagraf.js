import React from "react";

const Myparagraf = (props) => {
  console.log("Myparagraf Component");
  return <div>{props.children}</div>;
};

export default Myparagraf;
