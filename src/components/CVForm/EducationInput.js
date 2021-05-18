import React from "react";

const EducationInput = (props) => {
  const { data, value, handleInput, handleAdd, handleDelete } = props;
  return (
    <div>
      {data.map((edu) => {
        if (edu.status !== "deleted") {
        return (
          <div key={edu.id}>
            <p>School:</p>
            <input
              type="text"
              value={value}
              onChange={handleInput}
              name="school"
              id={edu.id}
            ></input>
            <p>Degree:</p>
            <input
              type="text"
              value={value}
              onChange={handleInput}
              name="degree"
              id={edu.id}
            ></input>
            <p>Date From:</p>
            <input
              type="text"
              value={value}
              onChange={handleInput}
              name="dateFrom"
              id={edu.id}
            ></input>
            <p>Date To:</p>
            <input
              type="text"
              value={value}
              onChange={handleInput}
              name="dateTo"
              id={edu.id}
            ></input>
            <button type="button" onClick={handleAdd}>
              Add
            </button>
            <button type="button" onClick={handleDelete} id={edu.id}>
              Delete
            </button>
          </div>
        );
        }

      })}
    </div>
  );
};

export default EducationInput;
