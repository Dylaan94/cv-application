import React from "react";

const EducationInput = (props) => {
  const { value, handleInput, handleAdd } = props;
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
      <p>Date From:</p>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        name="dateFrom"
      ></input>
      <p>Date To:</p>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        name="dateTo"
      ></input>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default EducationInput;
