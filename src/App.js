import React, { Component } from 'react';
// import Wall from './components/Wall/Wall';
import Floor from './components/Floor/Floor';
// import Lamp from './components/Lamp/Lamp';
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
  leftWall: 409,
  rightWall: 409,
  wallHeight: 850,
};

let totalWidth = 4000;

const Canvas = (props) => {
  const { totalWidth } = props;
  return (
    <div className="canvas" style={{ width: totalWidth }}>
      {props.children}
    </div>
  );
};


const ArtWall = (props) => {
  const { totalWidth, wallHeight } = props;

  const styles = {
    background: `url(${wallTexture})`,
    width: totalWidth,
    // height: wallHeight,
  };

  return (
    <div className="artwall" style={styles}>
    </div>
  );
};

const SideWall = (props) => {
  const c = props.side === 'left' ? 'sidewall sidewall-left' : 'sidewall sidewall-right';
  const sidewallHeight = props.height + 70;
  return (
    <div className={c} style={{ width: props.width, height: sidewallHeight }}>
      <div className="sidewall-inner" style={{ background: `url(${wallTexture})`, backgroundColor: 'rgb(236, 236, 236)' }} />
      {/* <div className="sidewall-inner sidewall-shadow"></div> */}
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
      <div>
        <Canvas totalWidth={totalWidth}>
          <ArtWall totalWidth={totalWidth} wallHeight={values.wallHeight} />
          <SideWall side="left" width={values.leftWall} height={values.wallHeight} />
          <SideWall side="right" width={values.rightWall} height={values.wallHeight} />
          <Floor totalWidth={totalWidth} leftWall={values.leftWall} rightWall={values.rightWall} />
          {this.state.art && this.renderArt()}
        </Canvas>
      </div>
    );
  }
}

export default App;
