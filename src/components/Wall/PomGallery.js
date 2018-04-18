import React from 'react';
import PomGalleryImg from '../../assets/pomGallery-img.jpg';
import styles from './PomGallery.module.css';


const PomGallery = (props) => (
  <img className={styles.pomImg} src={PomGalleryImg} alt="pomGallery-img" onClick={props.handlePomGalleryClick}></img>
);

export default PomGallery;
