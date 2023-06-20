import React from "react";

const Stopwatch = ({ toggleCard, handleStart }) => {
  return (
    <>
      <div className="card">
        <button onClick={() => toggleCard("stopwatch")} className="close">
          x
        </button>
        <h3>Stopwatch</h3>
        <h4>00:00:00:00</h4>

        <div className="start flex">
          <button>Start</button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
