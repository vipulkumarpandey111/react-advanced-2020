import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //runs each time dependency changes.
  useEffect(() => {
    console.log("inside useEffect");
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);
  console.log("Inside component");
  //runs only on initial render
  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
