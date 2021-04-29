import React from "react";

const PhoneInput = (props) => {
  const { value, handleInput } = props;

  return (
    <input
      type="text"
      placeholder="Phone Number"
      value={value}
      onChange={handleInput}
      name="phone"
    ></input>
  );
};

export default PhoneInput;
