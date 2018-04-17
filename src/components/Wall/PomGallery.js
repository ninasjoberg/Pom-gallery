import React from 'react';
import PomGalleryImg from '../../assets/pomGallery-img.jpg';
import styles from './PomGallery.module.css';


const PomGallery = () => (
  <img className={styles.pomImg} src={PomGalleryImg} alt="pomGallery-img"></img>
);

export default PomGallery;
