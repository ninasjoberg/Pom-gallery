import React from 'react';
import styles from './Socles.module.css';

const Socles = ({ totalWidth }) => {
  // const socleWidth = totalWidth - (2 * 397);
  return (
    <div className={styles.socleContainer} style={{ width: totalWidth }}>
      <div className={styles.socleLeft}></div>
      <div className={styles.socleMiddle} ></div>
      <div className={styles.socleRight}></div>
    </div>
  );
};

export default Socles;