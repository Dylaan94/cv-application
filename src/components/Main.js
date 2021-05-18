import React, { Component } from "react";

import NameInput from "./CVForm/NameInput";
import EmailInput from "./CVForm/EmailInput";
import PhoneInput from "./CVForm/PhoneInput";
import EducationInput from "./CVForm/EducationInput";
import ExperienceInput from "./CVForm/ExperienceInput";
import PersonalStatementInput from "./CVForm/PersonalStatementInput";
import CVRender from "./CVForm/CVRender";

import uniqid from "uniqid";

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
          id: 1,
          school: "",
          degree: "",
          city: "",
          dateFrom: "",
          dateTo: "",
        },
      ],
      experience: [
        {
          id: 1,
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
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
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
    let name = e.target.name; // name of the input eg school
    let index = e.target.id; // id so can target in state

    let array = [...this.state.education]; // creates array based off state

    let item = { ...array[index - 1] }; // targets array for data, can add further arrays later
    item[name] = value; // targets item based on target name
    array[index - 1] = item; // re adds item to the array which is then set through setState
    this.setState({
      education: array,
    });

    console.log(this.state);
  }

  handleAddEducation(e) {
    this.setState({
      education: this.state.education.concat({
        id: this.state.education.length + 1,
        school: "",
        degree: "",
        city: "",
        dateFrom: "",
        dateTo: "",
      }),
    });
  }

  handleDeleteEducation(e) {
    let index = parseInt(e.target.id);
    let array = [...this.state.experience];

    if (index == 1) {
      alert("cannot delete");
    } else {
      let item = {
        id: index,
        status: "deleted",
      };
      array[index - 1] = item;
      this.setState({
        education: array,
      });
      
      console.log("deleting");
    }
  }

  handleExperienceChange(e) {
    let value = e.target.value;
    let key = e.target.name;
    let index = e.target.id;

    let array = [...this.state.experience];

    let item = { ...array[index - 1] };
    item[key] = value;
    array[index - 1] = item;
    this.setState({
      experience: array,
    });

    console.log(this.state);
  }

  handleAddExperience(e) {
    console.log("adding new exprience");

    this.setState({
      experience: this.state.experience.concat({
        id: this.state.experience.length + 1,
        jobTitle: "",
        companyName: "",
        dateFrom: "",
        dateTo: "",
        summary: "",
      }),
    });
    console.log(this.state.experience);
  }

  handleSubmit(e) {
    // checks if CV is currently displayed and renders if not
    e.preventDefault();

    const cvForm = document.getElementById("cvForm");
    if (cvForm.style.display === "none") {
      cvForm.style.display = "flex";
    }
  }

  render() {
    return (
      <MainStyles.RootDiv>
        <MainStyles.ContainerDiv>
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
            <MainStyles.PersonalStatementInfo>
              <PersonalStatementInput
                handleInput={this.handleInputChange}
              ></PersonalStatementInput>
            </MainStyles.PersonalStatementInfo>
            <MainStyles.EducationInfo>
              <EducationInput
                handleInput={this.handleEducationChange}
                handleAdd={this.handleAddEducation}
                handleDelete={this.handleDeleteEducation}
                data={this.state.education}
              ></EducationInput>
            </MainStyles.EducationInfo>
            <MainStyles.ExperienceInfo>
              <ExperienceInput
                handleInput={this.handleExperienceChange}
                handleAdd={this.handleAddExperience}
                data={this.state.experience}
              ></ExperienceInput>
            </MainStyles.ExperienceInfo>
            <button type="submit"> Submit CV</button>
          </MainStyles.FormDiv>
        </MainStyles.ContainerDiv>
        <CVRender data={this.state}></CVRender> {/* sends data as a prop */}
      </MainStyles.RootDiv>
    );
  }
}

export default Main;
