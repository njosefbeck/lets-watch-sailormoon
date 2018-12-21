import React, { Component } from 'react';

class Star extends Component {
  renderColor() {
    if (this.props.fill) {
      return this.props.fill;
    }

    return '#DDD';
  }

  render() {
    return (
      <svg className="star" width="65" height="65" viewBox="17 17 65 65" fill={this.renderColor()}>
          <path d="M54.8,24.2l5.3,8.8c0.9,1.5,2.3,2.5,4,2.9l10,2.3c4.7,1.1,6.5,6.7,3.4,10.3l-6.7,7.8c-1.1,1.3-1.7,3-1.5,4.7L70,71.3   c0.4,4.8-4.4,8.2-8.8,6.4l-9.5-4c-1.6-0.7-3.4-0.7-4.9,0l-9.5,4c-4.4,1.9-9.2-1.6-8.8-6.4L29.5,61c0.1-1.7-0.4-3.4-1.5-4.7   l-6.7-7.8c-3.1-3.6-1.3-9.2,3.4-10.3l10-2.3c1.7-0.4,3.1-1.4,4-2.9l5.3-8.8C46.4,20.1,52.3,20.1,54.8,24.2z"/>
      </svg>
    );
  }
}

export default Star;