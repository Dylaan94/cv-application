import React, { Component } from "react";
import Education from "./CVForm/Education";
import RenderEdu from "./CVForm/RenderEdu";

import NameInput from "./CVForm/NameInput";
import EmailInput from "./CVForm/EmailInput";
import PhoneInput from "./CVForm/PhoneInput";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: value,
    });
    console.log(this.state);
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
      </div>
    );
  }
}

export default Main;
