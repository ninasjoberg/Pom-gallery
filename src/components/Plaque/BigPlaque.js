import React from 'react';
import styles from './BigPlaque.module.css';
import PomGalleryLogo from '../../assets/pomgallery.svg';


const BigPlaque = ({ artwork, handlePlaqueClick }) => {
  return(
    <div className={styles.BigPlaque}>
      <button className={styles.closeButton} onClick={(e) => handlePlaqueClick(e, null)}>x</button>
      <img className={styles.BigPlaquePomLogo} src={PomGalleryLogo}></img>
      <p className={styles.BigPlaqueText}>{artwork.title}</p>
      <p className={styles.BigPlaqueText}>{artwork.body}</p>
      <p className={styles.BigPlaquePrice}>Price: {artwork.price}sek</p>
      <div className={styles.div}>
        <img className={styles.BigPlaqueImg} src={artwork.artistImage.url}></img>
        <p className={styles.BigPlaqueText}>{artwork.description}</p>
      </div>
    </div>
  );
}
export default BigPlaque;