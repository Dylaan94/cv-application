import React, { Component } from "react";

import NameInput from "./CVForm/NameInput";
import EmailInput from "./CVForm/EmailInput";
import PhoneInput from "./CVForm/PhoneInput";
import EducationInput from "./CVForm/EducationInput"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      education: [{
        school: "hi",
        city: "",
        degree:"",
      }]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this)
  }

  handleInputChange(e) {
    let value = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: value,
    });
    console.log(this.state);
    console.log(this.state.education[0])
  }

  handleEducationChange(e) {
    let value = e.target.value;
    let key = e.target.name;

    let array = [...this.state.education];
    console.log(array)
    let item = { ...array[0] };
    console.log(item)
        item[key] = value;

        array[0] = item;

    this.setState({
      education: array
    });

console.log(this.state)
   
    

// console.log(this.state);
//     console.log(value)
//     console.log(key)
    
  }

  render() {
    return (
      <div>
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
        <EducationInput
          handleInput={this.handleEducationChange}
          
        >
          
</EducationInput>
      </div>
    );
  }
}

export default Main;
