import React from "react";

const ExperienceInput = (props) => {
  const { data, value, handleInput, handleAdd } = props;
  return (
    <div>
      {data.map((exp) => {
        return (
          <div key={exp.id}>
            <div className="jobDiv">
              <p>Job Title:</p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="jobTitle"
                id={exp.id}
              ></input>
              <p>Company Name: </p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="companyName"
                id={exp.id}
              ></input>
            </div>
            <div className="dateDiv">
              <p>Date From</p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="dateFrom"
                id={exp.id}
              ></input>
              <p>Date To:</p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="dateTo"
                id={exp.id}
              ></input>
            </div>
            <div className="summaryDiv">
              <p>Summary</p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="summary"
                id={exp.id}
              ></input>
            </div>
            <button type="button" onClick={handleAdd}>
              Add
            </button>
          </div>
        );

      })}

    </div>
  );
};

export default ExperienceInput;
