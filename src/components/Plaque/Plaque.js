import React from 'react';
import styles from './Plaque.module.css';

const Plaque = ({ artist, artName, handlePlaqueClick, index }) => (
  <div className={styles.plaque} onClick={(e) => handlePlaqueClick(e, index)}>
    <h2 className={styles.plaqueHeading}>POM GALLERY</h2>
    <p className={styles.plaqueText}>{artist}</p>
    <p className={styles.plaqueText}>{artName}</p>
  </div>
);

export default Plaque;
