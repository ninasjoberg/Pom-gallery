import React from 'react';
import Wall from './components/Wall/Wall';
import Floor from './components/Floor/Floor';
import Lamp from './components/Lamp/Lamp';
import wallTexture from './assets/egg-shell50.png';
import styles from './App.module.css';

const App = () => (
  <div className={styles.wallpaper} style={{ background: `url(${wallTexture})` }}>
    <Wall />
    <Lamp />
    <Floor />
  </div>
);


export default App;
