import React from 'react';
import wallTexture from '../../assets/egg-shell50.png';
import styles from './Sidewall.module.css';
import PomGalleryImg from '../../assets/pomGallery-img.jpg';

const Sidewall = (props) => (
  <div>
    <div
      className={props.side === 'left' ? styles.sidewallLeft : styles.sidewallRight}
      style={{ background: `url(${wallTexture})`, backgroundColor: 'rgb(220, 218, 218)' }}
    >
    </div>
  </div>
);

export default Sidewall;
