import React, { Component } from 'react';
import Wall from './components/Wall/Wall';
import Floor from './components/Floor/Floor';
import Lamp from './components/Lamp/Lamp';
import Frame from './components/Frame/Frame';
import wallTexture from './assets/egg-shell50.png';
import styles from './App.module.css';
import client from './cmsApi';

class App extends Component {

  state = {
    
  }

  componentDidMount() {
    const query = `*[_type == 'art']{
      body,
      "image": mainImage.asset->{url, metadata}, 
      "artist": artist->name
    }`;

    client.fetch(
      `{ 'art': ${query}`
      + '}', // Query
      { type: 'art' } // Params (optional)
    )
    .then((res) => {
      // console.log('artists: ', res);
      this.setState({ art: res.art });
    })
    .catch((err) => {
      console.error('Oh no, error occured: ', err);
    }
    );
  }

  renderFrames() {
    let leftOffset = 600;
    const verticalWidth = 350;
    const horizontalWidth = 500;
    const inBetweenWidth = 200;

    const allFrames = this.state.art.map((a) => {
      const artWidth = a.image.metadata.dimensions.aspectRatio < 1 ? verticalWidth : horizontalWidth;
      const leftOff = leftOffset;
      leftOffset += (artWidth + inBetweenWidth);
      return <Frame url={a.image.url} dimensions={a.image.metadata.dimensions} artWidth={artWidth} leftOffset={leftOff} />;
    });

    return allFrames;
  }

  render() {
    return (
      <div className={styles.wallpaper} style={{ background: `url(${wallTexture})` }}>
        {this.state.art && this.renderFrames()}
        <Wall />
        <Lamp />
        <Floor />
      </div>
    );
  }
}

export default App;
