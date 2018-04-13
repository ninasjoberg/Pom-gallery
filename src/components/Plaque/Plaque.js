import React from 'react';
import styles from './Plaque.module.css';
import zoomIcon from '../../assets/zoom-icon.svg';


const Plaque = ({ artist, artName, price, handlePlaqueClick, index }) => (
  <div>
    <div className={styles.plaque} onClick={(e) => handlePlaqueClick(e, index)}>
      <h2 className={styles.plaqueHeading}>POM GALLERY</h2>
      <p className={styles.plaqueText}>{artist}</p>
      <p className={styles.plaqueText}>{artName}</p>
      {/* <p className={styles.plaqueMoreInfo}>Visa info</p> */}
      {/* <p className={styles.plaqueText}>Pris: {price}</p> */}
      {/* <h2 className={styles.plaqueHeading}>GALLERY</h2> */}
    </div>
    {/* <img className={styles.plagueZoomIcon} src={zoomIcon}></img> */}
  </div>
);

export default Plaque;
