import React from 'react';
import styles from './Art.module.css';
import Plaque from '../Plaque/Plaque';

const Art = ({ url, dimensions, leftOffset, artWidth, artist }) => {
  console.log(url);

  return (
    <div className={ dimensions.aspectRatio > 1 ? styles.vertical : styles.horizontal } style={{ left: leftOffset, width: artWidth }}>
      <img src={url} alt="Art" className={styles.artImg} />
      <Plaque artist={artist}></Plaque>
    </div>
  );
};

export default Art;
