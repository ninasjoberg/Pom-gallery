import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styles from './GalleryPlaque.module.css';
import PomGalleryLogo from '../../assets/pomgallery.svg';
import closeIcon from '../../assets/cancel.svg';
import GoogleMaps from './GoogleMaps';


const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};


const GalleryPlaque = ({ gallery, handlePomGalleryClick }) => (
  <div className={styles.galleryPlaque} onClick={handlePomGalleryClick}>
    <img className={styles.closeButton} src={closeIcon} alt="Close" />
    <img className={styles.galleryPlaquePomLogo} src={PomGalleryLogo} alt="Pom logo"></img>
    {gallery && <BlockContent blocks={gallery[0].description} serializers={serializers} />}
    <div className={styles.googleMapsContainer}>
      <GoogleMaps position={gallery[0].location} />
    </div>
  </div>
);


export default GalleryPlaque;
