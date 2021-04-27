import React, { Component } from "react";
import Education from "./CVForm/Education";
import RenderEdu from "./CVForm/RenderEdu";

import NameInput from "./CVForm/NameInput";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <div>
        <NameInput
          value={this.state.name}
          handleInput={this.handleInputChange}
        ></NameInput>
      </div>
    );
  }
}

// const Main = (props) => {
//   return (
//     <div>
//       <h3> This is the form input section</h3>
//       <Education />
//     </div>
//   );
// };

export default Main;
