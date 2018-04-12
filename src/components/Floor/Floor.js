import React from 'react';
import styles from './Floor.module.css';
import floorTexture from '../../assets/wood.jpg';

const Floor = ({ totalWidth, leftWall, rightWall }) => {
  const socleWidth = totalWidth - (leftWall + rightWall);
  return (
    <div className={styles.floor}>
      <div className={styles.socleContainer}>
        <div className={styles.socleLeft} style={{ width: leftWall }}></div>
        <div className={styles.socle} style={{ width: socleWidth }}></div>
        <div className={styles.socleRight} style={{ width: rightWall }}></div>
      </div>
      <div className={styles.backgroundColor} style={{ width: totalWidth }}>
        <div className={styles.backgroundImage} style={{ background: `url(${floorTexture})` }}></div>
      </div>
    </div>
  );
};

export default Floor;
