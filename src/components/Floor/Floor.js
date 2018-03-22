import React from 'react';
import styles from './Floor.module.css';
//import wallTexture from '../../assets/asfalt-dark.png';
import wallTexture from '../../assets/482.jpg';

const Floor = () => {
  return (
    <div className={styles.floor}>
      <div className={styles.socleContainer}>
        <div className={styles.socleLeft}></div>
        <div className={styles.socle}></div>
        <div className={styles.socleRight}></div>
      </div>
      <div className={styles.backgroundColor}>
        <div className={styles.backgroundImage} style={{ background: `url(${wallTexture})` }}></div>
      </div>
    </div>
  );
};

export default Floor;