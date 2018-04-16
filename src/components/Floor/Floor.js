import React from 'react';
import styles from './Floor.module.css';
import floorTexture from '../../assets/wood.jpg';

const Floor = ({ totalWidth }) => {
  return (
    <div className={styles.floor} style={{ width: totalWidth }}>
      <div className={styles.backgroundColor} style={{ width: totalWidth }}>
        <div className={styles.backgroundImage} style={{ background: `url(${floorTexture})` }}></div>
      </div>
    </div>
  );
};

export default Floor;
