import React, { Component } from 'react';
import Floor from './components/Floor/Floor';
// import Lamp from './components/Lamp/Lamp';
import Art from './components/Art/Art';
import Artwall from './components/Wall/Artwall';
import Sidewall from './components/Wall/Sidewall';
import styles from './App.module.css';
import client from './cmsApi';
import BigPlaque from './components/Plaque/BigPlaque';


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


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showBigPlaque: null, // will be set to index number of artworkInfo that will be shown
    };
    this.handlePlaqueClick = this.handlePlaqueClick.bind(this);
  }

  componentDidMount() {
    const query = `*[_type == 'art']{
      body,
      "image": mainImage.asset->{url, metadata},
      "artist": artist->name,
      "description": artist->about[0].children[].text,
      title,
      price,
      "artistImage": artist->image.asset->{url},
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
    });

    document.body.addEventListener('scroll', () => {
      if (this.state.showBigPlaque !== null) {
        this.setState({ showBigPlaque: null });
      }
    });
  }

  handlePlaqueClick(event, artIndex) {
    if (this.state.showBigPlaque === artIndex) {
      this.setState({ showBigPlaque: null });
    } else {
      this.setState({ showBigPlaque: artIndex });
    }
  }

  renderArt() {
    let offset = values.leftOffset;

    const allArts = this.state.art.map((a, index) => {
      const artWidth = a.image.metadata.dimensions.aspectRatio < 1 ? values.verticalWidth : values.horizontalWidth;
      const leftOff = offset;
      offset += (artWidth + values.inBetweenWidth);
      return <Art url={a.image.url} dimensions={a.image.metadata.dimensions} artWidth={artWidth} leftOffset={leftOff} artist={a.artist} artName={a.title} price={a.price} handlePlaqueClick={this.handlePlaqueClick} index={index} />;
    });
    return allArts;
  }

  render() {
    return (
      <div>
        <Canvas totalWidth={totalWidth}>
          <Artwall totalWidth={totalWidth} />
          {this.state.showBigPlaque != null && <BigPlaque artwork={this.state.art[this.state.showBigPlaque]} handlePlaqueClick={this.handlePlaqueClick} />}
          <Sidewall side="left" />
          <Sidewall side="right" />
          <Floor totalWidth={totalWidth} />
          {this.state.art && this.renderArt()}
        </Canvas>
      </div>
    );
  }
}

export default App;
