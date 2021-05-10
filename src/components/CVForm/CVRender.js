import React from "react";
import FormRenderStyles from "./styles/FormRenderStyles";

const CVRender = (props) => {
  // destructures data from props
  const { data } = props;
  console.log(data);
  return (
    <FormRenderStyles.Wrapper id="cvForm">
      {/*style = {{display:"none"}}*/}
      <FormRenderStyles.HeaderDiv>
        <FormRenderStyles.NameDiv>
          <p>{data.name}</p>
        </FormRenderStyles.NameDiv>
        <FormRenderStyles.ContactDiv>
          <p>E-mail: </p>
          {data.email}
          <p>Phone: </p>
          {data.phone}
        </FormRenderStyles.ContactDiv>
      </FormRenderStyles.HeaderDiv>
      <FormRenderStyles.PersonalDiv>
        <p>Personal Statement</p>
        <p>{data.personalStatement}</p>
      </FormRenderStyles.PersonalDiv>
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
    </FormRenderStyles.Wrapper>
  );
};

export default CVRender;
