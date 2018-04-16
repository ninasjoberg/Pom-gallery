import React from 'react';
import wallTexture from '../../assets/egg-shell50.png';
import styles from './Artwall.module.css';

const Artwall = (props) => {
  const { totalWidth } = props;

  const bg = {
    background: `url(${wallTexture})`,
    width: totalWidth,
  };

  return (
    <div className={styles.artwall} style={bg}>
    </div>
  );
};

export default Artwall;
