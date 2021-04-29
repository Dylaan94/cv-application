import React from "react";

const EmailInput = (props) => {
  const { value, handleInput } = props
  
  return (
    <input
      type="text"
      placeholder="Input your Email here"
      value={value}
      onChange={handleInput}
      name="email"
    ></input>
  );
};

export default EmailInput;
