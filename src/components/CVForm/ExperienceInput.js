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
              ></input>
              <p>Company Name: </p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="companyName"
              ></input>
            </div>
            <div className="dateDiv">
              <p>Date From</p>
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
            </div>
            <div className="summaryDiv">
              <p>Summary</p>
              <input
                type="text"
                value={value}
                onChange={handleInput}
                name="summary"
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
