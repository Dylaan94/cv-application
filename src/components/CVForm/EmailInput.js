import React from "react";

const EmailInput = ({ value, handleInput }) => {
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
