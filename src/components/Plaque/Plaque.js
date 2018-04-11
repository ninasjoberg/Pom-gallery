import React from 'react';
import styles from './Plaque.module.css';

const Plaque = ({ artist }) => (
  <div className={styles.plaque}>
    {artist}
  </div>
);

export default Plaque;
