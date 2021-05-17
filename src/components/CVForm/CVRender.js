import React from "react";
import FormRenderStyles from "./styles/FormRenderStyles";

const CVRender = (props) => {
  // destructures data from props
  const { data } = props;
  console.log(data);
  console.log(data.education)
  console.log(data.experience)
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
        {/* Maps the education data based on state */}
        {data.education.map((edu) => {
          return (
            <FormRenderStyles.EduDataDiv key = {edu.id}>
              <FormRenderStyles.EduTimeDiv>
                <p>Date From: {edu.dateFrom}</p>
                <p>Date To: {edu.dateTo}</p>
              </FormRenderStyles.EduTimeDiv>
              <FormRenderStyles.EduInfoDiv>
                <p>School: {edu.school}</p>
                <p>Degree: {edu.degree}</p>
              </FormRenderStyles.EduInfoDiv>
            </FormRenderStyles.EduDataDiv>
          );
        })}

      </FormRenderStyles.EduDiv>
      <FormRenderStyles.EmployDiv>
        <FormRenderStyles.EmployTitleDiv>
          <p>Experience:</p>
        </FormRenderStyles.EmployTitleDiv>
        {data.experience.map((exp) => {
          return (
            <FormRenderStyles.EmployDataDiv key = {exp.id}>
              <FormRenderStyles.EmployTimeDiv>
                <p>Date From: {exp.dateFrom}</p>
                <p>Date To: {exp.dateTo} </p>
              </FormRenderStyles.EmployTimeDiv>
              <FormRenderStyles.EmployInfoDiv>
                <p>Job Title: {exp.jobTitle}</p>
                <p>Company: {exp.companyName}</p>
                <p>Job summary: {exp.summary} </p>
              </FormRenderStyles.EmployInfoDiv>
            </FormRenderStyles.EmployDataDiv>
          );
        })}

      </FormRenderStyles.EmployDiv>
    </FormRenderStyles.Wrapper>
  );
};

export default CVRender;
