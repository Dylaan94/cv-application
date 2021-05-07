import React from "react";
import FormRenderStyles from "./styles/FormRenderStyles";

const CVRender = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <FormRenderStyles.CVForm id = "cvForm" style = {{display:"none"}}>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Personal Statement</p>
      <p>{data.personalStatement}</p>
      <p>Education:</p>
      <p>School: {data.education[0].school}</p>
      <p>City: {data.education[0].city}</p>
      <p>Degree: {data.education[0].degree}</p>
      <p>Experience</p>
      <p>Job Title: {data.experience[0].jobTitle}</p>
      <p>Company: {data.experience[0].companyName}</p>
      <p>Date From: {data.experience[0].dateFrom}</p>
      <p>Date To: {data.experience[0].dateTo} </p>
      <p>Job summary: {data.experience[0].summary} </p>
    </FormRenderStyles.CVForm>
  );
};

export default CVRender;
