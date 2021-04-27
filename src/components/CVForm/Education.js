import React, { Component } from "react";
import RenderEdu from './RenderEdu'

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edu: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      edu: e.target.value,
    });
    console.log(this.state.edu);
  };

  onSubmitInput = (e) => {
    e.preventDefault();
    console.log(this.state.edu);
  };

  render() {
    const { edu } = this.state;
    return (
      <div className="educationDiv">
        <form onSubmit={this.onSubmitInput}>
          <label>
            Education:
            <input
              type="text"
              id="eduInput"
              onChange={this.handleChange}
              value={this.state.edu}
            ></input>
            <button type="submit">Add</button>
          </label>
            </form>
            <RenderEdu edu={edu} />
      </div>
    );
  }
}

export default Education;
