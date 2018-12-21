import React, { Component } from 'react';
import './Filler.css';

class Filler extends Component {
  render() {
    return (
      <div className="filler" style={{ width: `${this.props.percentage}%`}}>
        <span className="percentage">{this.props.percentage}%</span>
      </div>
    );
  }
}

export default Filler;