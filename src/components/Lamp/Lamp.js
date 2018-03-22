import React from 'react';
import styles from './Lamp.module.css';

const Lamp = () => (
  <div className={styles.lampContainer}>
    <div className={styles.light}></div>
    <div className={styles.lightCircle}></div>
  </div>
);

export default Lamp;
