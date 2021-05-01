import React from "react";

const EducationInput = (props) => {
  const { value, handleInput } = props;
  return (
    <div>
      <form>
        School:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="school"
        ></input>
        City:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="city"
        ></input>
        Degree:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="degree"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EducationInput;
