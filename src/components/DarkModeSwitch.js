import React, { Component } from 'react';

class DarkModeSwitch extends Component {
  render() {
    return (
      <div className="switch" onClick={this.props.onClick} />
    );
  }
}

export default DarkModeSwitch;