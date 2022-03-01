import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 23,
    message: "random message",
  });
  //another way of modifying objects
  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
    // setMessage('hello world');
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
