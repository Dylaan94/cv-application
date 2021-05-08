import React from "react";
import styled from "styled-components";
import ExperienceInput from "../ExperienceInput";

const RootDiv = styled.div`
  background: #0077b6;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  p {
    padding: 0%;
    margin: 0%;
  }
`;

const FormDiv = styled.form`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;
`;

const ContactInfo = styled.div`
  background: #00b4d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  input {
    width: 50vw;
    padding: 0.5em;
    height: 3vh;
    margin: 0.3em;
  }
`;

const PersonalStatementInfo = styled.div`
  input {
    margin: 0.5em;
    width: 60vw;
    height: 5vh;
  }
`;

const EducationInfo = styled.div`
  padding: 0.5em;
  p {
    display: inline;
    margin: 0.5em;
  }
  input {
    height: 3vh;
  }
  button {
    margin-left: 0.5em;
  }
`;

const ExperienceInfo = styled.div`
  .jobDiv > p,
  .dateDiv > p {
    display: inline;
  }
  input {
    height: 3vh;
  }
  .summaryDiv {
    text-align: center;
    input {
      width: 50vw;
      height: 5vh;
    }
    button {
      display: inline;
    }
  }
  input {
    margin: 0.3em;
  }
`;

const MainStyles = {
  RootDiv: RootDiv,
  FormDiv: FormDiv,
  ContactInfo: ContactInfo,
  PersonalStatementInfo: PersonalStatementInfo,
  EducationInfo: EducationInfo,
  ExperienceInfo: ExperienceInfo,
};

export default MainStyles;
