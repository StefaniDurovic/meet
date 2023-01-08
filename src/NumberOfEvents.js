import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = { 
    numberOfEvents: 32,
    errorText: ""
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        errorText: "Please select a number between 1 and 32."
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ""
      });

      this.props.updateEvents(undefined, value);

    }
  };


  render() {
    return (
      <div>
        <ErrorAlert text={this.state.errorText}/>
          <label>
            Number of Events:
            <input
              type="number"
              className="number"
              placeholder="Enter desired number of events"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChange}
            />
          </label>
      </div>
    );
  }
}

export default NumberOfEvents;