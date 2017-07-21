import React from 'react';
import PropTypes from 'prop-types';
import styles from './carouselItem.scss';

const CarouselItem = ({movieItem, votingRate, onItemClick, onItemRemove}) => {
  return (
    <div className={`${votingRate > 0 ? styles.voted : ''}`}>
      <div onClick={onItemRemove}>X</div>
      <div className={styles.item} onClick={onItemClick}>
        <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movieItem['poster_path']}`}/>
        {movieItem.title}
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  movieItem: PropTypes.object.isRequired,
  votingRate: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired
};

export default CarouselItem;
