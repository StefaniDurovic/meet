import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { number: 32 };

  changeNumber(value) {
    this.setState({ number: value });
  }

  render() {
    const { number } = this.state;

    return (
      <input
        className='number'
        type='number'
        value={number}
        onChange={(event) => {
          this.changeNumber(event.target.value);
        }}
      >
      </input>
    );
  }
}

export default NumberOfEvents;