import React, { Component } from 'react';
//import Wall from './components/Wall/Wall';
//import Floor from './components/Floor/Floor';
//import Lamp from './components/Lamp/Lamp';
import Art from './components/Art/Art';
import wallTexture from './assets/egg-shell50.png';
import floorTexture from './assets/wood.jpg';
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
  wallHeight: 880,  // ipad height 1024px
  floorHeight: 200,  // ipad height 1024px
};

let totalWidth = 1000;

const Canvas = (props) => {
  return (
    <div style={{ width: `${props.width}px`, height: `${props.height}px`, position: 'relative', overflowY: 'hidden' }}>{props.children}</div>
  );
};

const SideWall = (props) => {
  const c = props.side === 'left' ? 'sidewall sidewall-left' : 'sidewall sidewall-right';
  return (
    <div className={c} style={{ background: `url(${wallTexture})`, width: props.width, height: props.height }}>
      <div className="sidewall-inner sidewall-shadow sidewall-opacity">{props.side}</div>
    </div>
  );
};

const ArtWall = (props) => {
  return (
    <div style={{ background: `url(${wallTexture})`, width: props.width, height: props.height }}>
      <div className="artwall-inner">{props.side}</div>
    </div>
  );
};

const Floor = (props) => {
  return (
    <div className="floor" style={{ background: `url(${floorTexture})`, width: props.width, height: props.height }}>
      <div className="floor-inner">{props.side}</div>
    </div>
  );
};

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
      // <div className={styles.wallpaper} style={{ background: `url(${wallTexture})`, width: totalWidth }}>
      <div>        
        <Canvas width={totalWidth} height="1024">
          {this.state.art && this.renderArt()}
          <SideWall side="left" width={values.leftWall} height={values.wallHeight} />
          <ArtWall width={totalWidth} height={values.wallHeight} />
          <SideWall side="right" width={values.rightWall} height={values.wallHeight} />
          <Floor width={totalWidth} height={values.floorHeight} />
        </Canvas>
      </div>
    );
  }
}

export default App;
