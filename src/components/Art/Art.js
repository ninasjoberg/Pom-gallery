import React from 'react';
import styles from './Art.module.css';
import Plaque from '../Plaque/Plaque';

const Art = ({ url, dimensions, leftOffset, artWidth, artist, artName, price, index, handlePlaqueClick }) => {
  return (
    <div className={ dimensions.aspectRatio > 1 ? styles.vertical : styles.horizontal } style={{ left: leftOffset, width: artWidth }}>
      <img src={url} alt="Art" className={styles.artImg} onClick={(e) => handlePlaqueClick(e, index)} />
      <Plaque artist={artist} artName={artName} price={price} index={index} handlePlaqueClick={handlePlaqueClick}></Plaque>
    </div>
  );
};

export default Art;
