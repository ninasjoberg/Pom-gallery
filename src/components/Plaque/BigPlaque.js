import React from 'react';
import styles from './BigPlaque.module.css';
import PomGalleryLogo from '../../assets/pomgallery.svg';
import closeIcon from '../../assets/cancel.svg';

const BigPlaque = ({ artwork, handlePlaqueClick }) => (
  <div className={styles.BigPlaque} onClick={(e) => handlePlaqueClick(e, null)}>
    <img className={styles.closeButton} src={closeIcon} alt="Close" />
    <img className={styles.BigPlaquePomLogo} src={PomGalleryLogo} alt="Pom logo"></img>
    <p className={styles.BigPlaqueText}>{artwork.title && artwork.title}</p>
    <p className={styles.BigPlaqueText}>{artwork.body && artwork.body}</p>
    <p className={styles.BigPlaquePrice}>Price: {artwork.price && artwork.price}sek</p>
    <div className={styles.div}>
      <img className={styles.BigPlaqueImg} src={artwork.artistImage.url} alt="Artist"></img>
      <p className={styles.BigPlaqueText}>{artwork.description && artwork.description}</p>
    </div>
  </div>
);


export default BigPlaque;
