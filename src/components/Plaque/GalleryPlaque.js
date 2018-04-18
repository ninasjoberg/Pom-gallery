import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styles from './BigPlaque.module.css';
import PomGalleryLogo from '../../assets/pomgallery.svg';
import closeIcon from '../../assets/cancel.svg';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};


const BigPlaque = ({ gallery, handlePomGalleryClick }) => (
  <div className={styles.BigPlaque} onClick={handlePomGalleryClick}>
    <img className={styles.closeButton} src={closeIcon} alt="Close" />
    <img className={styles.BigPlaquePomLogo} src={PomGalleryLogo} alt="Pom logo"></img>
    {gallery && <BlockContent blocks={gallery[0].description} serializers={serializers} />}
  </div>
);


export default BigPlaque;
