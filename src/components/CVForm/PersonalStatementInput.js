import React from "react";
import NameInput from "./NameInput";

const PersonalStatementInput = (props) => {
  const { value, handleInput } = props;

  return (
    <div>
      Personal Statement:
      <input
        type="text"
        value={value}
        onChange={handleInput}
        name="personalStatement"
      ></input>
    </div>
  );
};

export default PersonalStatementInput