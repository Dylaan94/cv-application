import React from "react";
import FormRenderStyles from "./styles/FormRenderStyles";

const CVRender = (props) => {
  // destructures data from props
  const { data } = props;
  console.log(data);
  return (
    <FormRenderStyles.Wrapper id="cvForm" style={{ display: "none" }}>
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
        {data.personalStatement}
      </FormRenderStyles.PersonalDiv>
      <FormRenderStyles.EduDiv>
        <FormRenderStyles.EduTitleDiv>
          <p>Education:</p>
        </FormRenderStyles.EduTitleDiv>
        <FormRenderStyles.EduDataDiv>
          <FormRenderStyles.EduTimeDiv>
            <p>Date From: {data.education[0].dateFrom}</p>
            <p>Date To: {data.education[0].dateTo}</p>
          </FormRenderStyles.EduTimeDiv>
          <FormRenderStyles.EduInfoDiv>
            <p>School: {data.education[0].school}</p>
            <p>Degree: {data.education[0].degree}</p>
          </FormRenderStyles.EduInfoDiv>
        </FormRenderStyles.EduDataDiv>
      </FormRenderStyles.EduDiv>
      <FormRenderStyles.EmployDiv>
        <FormRenderStyles.EmployTitleDiv>
          <p>Experience:</p>
        </FormRenderStyles.EmployTitleDiv>
        <FormRenderStyles.EmployDataDiv>
          <FormRenderStyles.EmployTimeDiv>
            <p>Date From: {data.experience[0].dateFrom}</p>
            <p>Date To: {data.experience[0].dateTo} </p>
          </FormRenderStyles.EmployTimeDiv>
          <FormRenderStyles.EmployInfoDiv>
            <p>Job Title: {data.experience[0].jobTitle}</p>
            <p>Company: {data.experience[0].companyName}</p>
            <p>Job summary: {data.experience[0].summary} </p>
          </FormRenderStyles.EmployInfoDiv>
        </FormRenderStyles.EmployDataDiv>
      </FormRenderStyles.EmployDiv>
    </FormRenderStyles.Wrapper>
  );
};

export default CVRender;
