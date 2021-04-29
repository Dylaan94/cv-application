import React from "react";

const NameInput = (props) => {
  const { value, handleInput } = props

  return (
    <input
      type="text"
      placeholder="Input your name here"
      value={value}
      onChange={handleInput}
      name="name"
    ></input>
  );
};

export default NameInput
