import React from 'react';
import wallTexture from '../../assets/egg-shell50.png';
import styles from './Sidewall.module.css';

const Sidewall = (props) => (
  <div
    className={props.side === 'left' ? styles.sidewallLeft : styles.sidewallRight} 
    style={{ background: `url(${wallTexture})`, backgroundColor: 'rgb(236, 236, 236)' }}
  />
);

export default Sidewall;
