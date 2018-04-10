import React from 'react';
import styles from './Frame.module.css';

const Frame = ({ url, dimensions, leftOffset, artWidth }) => {
  console.log(url);

  return (
    <div className={ dimensions.aspectRatio > 1 ? styles.vertical : styles.horizontal } style={{ left: leftOffset, width: artWidth }}>
      <img src={url} alt="Art" className={styles.frameImg} />
    </div>
  );
};

export default Frame;
