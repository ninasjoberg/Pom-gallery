import React from 'react';
import styles from './Wall.module.css';

const Wall = () => (
  <div className={styles.wallOpacity}>
    <div className={styles.wallShadowLeft}></div>
    <div className={styles.wallShadow}></div>
    <div className={styles.wallShadowRight}></div>
  </div>
);

export default Wall;
