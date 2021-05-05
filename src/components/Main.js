import React, { Component } from "react";

import NameInput from "./CVForm/NameInput";
import EmailInput from "./CVForm/EmailInput";
import PhoneInput from "./CVForm/PhoneInput";
import EducationInput from "./CVForm/EducationInput";
import ExperienceInput from "./CVForm/ExperienceInput";
import PersonalStatementInput from "./CVForm/PersonalStatementInput";
import CVRender from "./CVForm/CVRender";

import styled from "styled-components";

import MainStyles from "./CVForm/styles/MainStyles";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      education: [
        {
          school: "",
          degree: "",
        },
      ],
      experience: [
        {
          jobTitle: "",
          companyName: "",
          dateFrom: "",
          dateTo: "",
          summary: "",
        },
      ],
      personalStatement: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: value,
    });
    console.log(this.state);
  }

  handleEducationChange(e) {
    let value = e.target.value; // value written in the box
    let key = e.target.name; // name of the input eg school

    let array = [...this.state.education]; // creates array based off state
    console.log(array);
    let item = { ...array[0] }; // targets array for data, can add further arrays later
    item[key] = value; // targets item based on target name
    array[0] = item; // re adds item to the array which is then set through setState
    this.setState({
      education: array,
    });
    console.log(this.state);
  }

  handleExperienceChange(e) {
    let value = e.target.value;
    let key = e.target.name;

    let array = [...this.state.experience];
    console.log(array);
    let item = { ...array[0] };
    item[key] = value;
    array[0] = item;
    this.setState({
      experience: array,
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  render() {
    return (
      <MainStyles.RootDiv>
        <MainStyles.FormDiv onSubmit={this.handleSubmit}>
          <MainStyles.ContactInfo>
            <NameInput
              value={this.state.name}
              handleInput={this.handleInputChange}
            ></NameInput>
            <EmailInput
              value={this.state.email}
              handleInput={this.handleInputChange}
            ></EmailInput>
            <PhoneInput
              value={this.state.phone}
              handleInput={this.handleInputChange}
            ></PhoneInput>
          </MainStyles.ContactInfo>
          <PersonalStatementInput
            handleInput={this.handleInputChange}
          ></PersonalStatementInput>
          <MainStyles.EducationInfo>
            <EducationInput
              handleInput={this.handleEducationChange}
            ></EducationInput>
          </MainStyles.EducationInfo>
          <MainStyles.ExperienceInfo>
            <ExperienceInput
              handleInput={this.handleExperienceChange}
            ></ExperienceInput>
          </MainStyles.ExperienceInfo>

          <button type="submit"> Submit CV</button>
        </MainStyles.FormDiv>

        <CVRender data={this.state}></CVRender>
      </MainStyles.RootDiv>
    );
  }
}

export default Main;
