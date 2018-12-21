import React, { Component } from 'react';
import Star from './Star';
import './MediaItem.css';
import watched from './watched.json';

class MediaItem extends Component {
  renderStarListItems() {
    if (this.props.type === 'movie') {
      const hasBeenWatched = watched.ids.includes(this.props.id);
      const text = hasBeenWatched ? 'Watched!' : 'Not watched!';
      const classes = hasBeenWatched ? 'star-list-item-movie done': 'star-list-item-movie';
      return <li id={this.props.id} key={this.props.id} className={classes}>{text}</li>;
    }

    const items = [];
    for (let i = this.props.startEpisode; i < this.props.startEpisode + this.props.numEpisodes; i++ ) {
      items.push(
        <li className="star-list-item" id={`${this.props.id}-${i}`} key={`${this.props.id}-${i}`}>
          <div className="star-number">{i}</div>
          <Star fill={watched.ids.includes(`${this.props.id}-${i}`) ? this.props.color : null} />
        </li>
      )
    }

    return items;
  }

  render() {
    return (
      <section className="media-item">
        <span className="media-item-type">
          {this.props.type}
        </span>
        <h2>{this.props.name}</h2>
        <ul className={`star-list ${this.props.type === 'movie' ? 'movie' : ''}`}>
          {this.renderStarListItems()}
        </ul>
      </section>
    );
  }
}

export default MediaItem;