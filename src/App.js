import React, { Component } from 'react';
import './App.css';
import logo from './images/sailor_moon_logo.png';
import sailorMars from './images/sailor_mars.gif';
import sailorMoon from './images/sailor_moon.gif';
import sailorMercury from './images/sailor_mercury.gif';
import sailorJupiter from "./images/sailor_jupiter.gif";
import MediaItem from './MediaItem';
import ProgressBar from './ProgressBar';
import data from './media';
import watched from './watched';

class App extends Component {
  constructor(props) {
    super(props);

    const total = 242;
    const numWatched = watched.ids.length;

    this.state = {
      media: data.media,
      percentageWatched: Math.ceil((numWatched / total) * 100)
    };
  }

  renderMediaItems() {
    return this.state.media.map(mediaItem => {
      return <MediaItem
        key={`${mediaItem.name}-${mediaItem.id}`}
        id={mediaItem.id}
        type={mediaItem.type}
        name={mediaItem.name}
        numEpisodes={mediaItem.numEpisodes}
        startEpisode={mediaItem.startEpisode}
        color={mediaItem.color}
      />;
    });
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="Sailor Moon Logo" />
        <ul className="sailor-sprites">
          <li className="sailor-sprite"><img src={sailorMoon} alt="Sailor Moon" /></li>
          <li className="sailor-sprite"><img src={sailorMercury} alt="Sailor Mercury" /></li>
          <li className="sailor-sprite"><img src={sailorMars} alt="Sailor Mars" /></li>
          <li className="sailor-sprite"><img src={sailorJupiter} alt="Sailor Jupiter" /></li>
        </ul>
        <ProgressBar percentage={this.state.percentageWatched} />
        {this.renderMediaItems()}
        <div className="byline">Made with love by <a href="https://njosefbeck.com" target="_blank" rel="noopener noreferrer">njosefbeck</a>.<br/>Sprites from <a href="http://ai-no-senshi.net/media/sprites" target="_blank" rel="noopener noreferrer">here</a>. Star SVG created by Artem Kovyazin from the <a href="https://thenounproject.com" target="_blank" rel="noopener noreferrer">Noun Project</a>.</div>
      </div>
    );
  }
}

export default App;
