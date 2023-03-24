import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((previousCount) => previousCount + 1);
  }
  function decrease() {
    setCount((previousCount) => previousCount - 1);
  }
  
  return (
    <div className="state">
      <div className="state--value">
        <button className="counter-button" onClick={increase}>
          +
        </button>
        <button className="display-count">{count}</button>
        <button className="counter-button" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
