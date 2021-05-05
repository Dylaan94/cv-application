import React from "react";

const EducationInput = (props) => {
  const { value, handleInput } = props;
  return (
    <div>
      <p>School:</p>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        name="school"
      ></input>
      <p>Degree:</p>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        name="degree"
      ></input>
      <button type="submit">Add</button>
    </div>
  );
};

export default EducationInput;
