import React, { Component } from 'react';
import Filler from './Filler';
import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <Filler percentage={this.props.percentage} />
      </div>
    );
  }
}

export default ProgressBar;