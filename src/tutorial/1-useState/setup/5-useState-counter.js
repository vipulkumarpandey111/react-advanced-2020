import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0);

  //change state using setValue or functionality of useState
  const reset=()=>{
    setValue(0);
  };

  //change value using function as per previous state
  const complexIncrease=()=>{
    setTimeout(()=>{
      //setValue(value+1) won't work because it will catch previous value before timeout 
      //because the function is asynchronous and
      //not the previous state value
      setValue((prevState)=>{
        return prevState+1;
      });
    },2000);
  };

  return (
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value-1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={()=>setValue(value+1)}>
          increase
        </button>
      </section>
      <section style={{margin:'4rem 0'}}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
