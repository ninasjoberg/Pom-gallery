import React, { Component } from 'react';
import Wall from './components/Wall/Wall';
import Floor from './components/Floor/Floor';
import Lamp from './components/Lamp/Lamp';
import Art from './components/Art/Art';
import wallTexture from './assets/egg-shell50.png';
import styles from './App.module.css';
import client from './cmsApi';

const values = {
  leftOffset: 600,
  rightOffset: 400,
  verticalWidth: 350,  // standing art
  horizontalWidth: 500,
  inBetweenWidth: 200,
  leftWall: 417,
  rightWall: 417,
};

let totalWidth = 1000;

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

      totalWidth = res.art.reduce((prev, curr) => {
        const artWidth = curr.image.metadata.dimensions.aspectRatio < 1 ? values.verticalWidth : values.horizontalWidth;
        return prev + artWidth + values.inBetweenWidth;
      }, values.leftOffset); 
      totalWidth += values.rightOffset;
      this.setState({ art: res.art });

    })
    .catch((err) => {
      console.error('Oh no, error occured: ', err);
    }
    );
  }

  renderArt() {
    let offset = values.leftOffset;

    const allArts = this.state.art.map((a) => {
      const artWidth = a.image.metadata.dimensions.aspectRatio < 1 ? values.verticalWidth : values.horizontalWidth;
      const leftOff = offset;
      offset += (artWidth + values.inBetweenWidth);
      return <Art url={a.image.url} dimensions={a.image.metadata.dimensions} artWidth={artWidth} leftOffset={leftOff} artist={a.artist} />;
    });
    return allArts;
  }

  render() {
    return (
      <div className={styles.wallpaper} style={{ background: `url(${wallTexture})`, width: totalWidth }}>
        {this.state.art && this.renderArt()}
        <Wall />
        {/* <Lamp /> */}
        <Floor totalWidth={totalWidth} leftWall={values.leftWall} rightWall={values.rightWall} />
      </div>
    );
  }
}

export default App;
