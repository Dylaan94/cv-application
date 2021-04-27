import React, { Component } from 'react'

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: this.props.edu
        }
    }

    render() {
        return (
            <div className = "educationDiv">
                <label>
                    Add Education: 
                     <input type="text" id="eduInput">
                        
                     </input>
                </label>
            </div>
        )
    }
}

export default Education;