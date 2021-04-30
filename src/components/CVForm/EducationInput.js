import React, { Component } from "react";

const EducationInput = (props) => {
  const { value, handleInput } = props;
  return (
    <div>
      <form>
        School:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="school"
        ></input>
        City:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="city"
        ></input>
        Degree:
        <input
          type="text"
          value={value}
          onChange={handleInput}
          name="degree"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

// class Education extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       school: "",
//       city: "",
//       degree: "",
//     };
//   }

//   handleChange = (e) => {
//     let value = e.target.value;
//     let key = e.target.name;
//     this.setState({
//       [key]: value,
//     });
//     console.log(this.state);
//   };

//   onSubmitInput = (e) => {
//     e.preventDefault();
//     console.log(this.state.edu);
//   };

//   render() {
//     return (
//       <div className="educationDiv">
//         <form onSubmit={this.onSubmitInput}>
//           <label>
//             School:
//             <input
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.school}
//               name="school"
//             ></input>
//             City:
//             <input
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.city}
//               name="city"
//             ></input>
//             Degree:
//             <input
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.degree}
//               name="degree"
//             ></input>
//             <button type="submit">Add</button>
//           </label>
//         </form>

//       </div>
//     );
//   }
// }

export default EducationInput;
