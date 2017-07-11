import React from 'react';
import styles from './poster.scss';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';

const Poster = ({movie}) => {
  const iconStyles = {
    margin: 'auto 25px',
    height: '75px',
    width: '75px'
  };

  return (
    <div className={styles['poster-wrapper']}>
      <ActionThumbUp color='#3ad913' style={iconStyles}/>
      <img src={`https://image.tmdb.org/t/p/w500/${movie['poster_path']}`} />
      <ActionThumbDown color='#ff2429' style={iconStyles}/>
    </div>
  );
};

export default Poster;
