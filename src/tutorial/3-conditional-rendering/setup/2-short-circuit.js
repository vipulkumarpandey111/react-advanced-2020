import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* {if(1){
      console.log("hello");
    }} */}
      {/* {if(){console.log('hello world!')}} */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an Error...</p>
      ) : (
        <div>
          <h1>There is no error...</h1>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
