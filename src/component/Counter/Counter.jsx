import React from "react";
import { useState } from "react/cjs/react.development";

const Counter = () => {
  const [state, setState] = useState(0);
  const data = {
    order: state,
  };

  const PlusButton = () => {
    setState(data.order + 1);
  };

  const MinusButton = () => {
    if (data.order > 0) setState(data.order - 1);
  };

  return (
    <center>
      <div>
        <h1> {data.order} </h1>
        <button style={{ margin: 10 }} onClick={MinusButton}>
          {" "}
          -{" "}
        </button>
        <button style={{ margin: 10 }} onClick={PlusButton}>
          {" "}
          +{" "}
        </button>

        <h1> Whistlist : {data.order} </h1>
      </div>
    </center>
  );
};

export default Counter;
