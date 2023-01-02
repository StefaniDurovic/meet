import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { numberOfEvents: 32 };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });

    this.props.updateEvents(undefined, value);
  };


  render() {
    return (
      <div>
          <label>
            Number of Events:
            <input
              type="number"
              className="number"
              placeholder="Enter desired number of events"
              min="1"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChange}
            />
          </label>
      </div>
    );
  }
}

export default NumberOfEvents;