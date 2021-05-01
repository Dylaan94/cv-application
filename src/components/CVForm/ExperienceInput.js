import React from "react";

const ExperienceInput = (props) => {
  const { value, handleInput } = props;
  return (
    <div>
      <form>
        Job Title:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="jobTitle"
        ></input>
        Company Name:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="companyName"
        ></input>
        Date From:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="dateFrom"
        ></input>
        Date To:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="dateTo"
        ></input>
        Summary:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="summary"
        ></input>
      </form>
    </div>
  );
};

export default ExperienceInput;
