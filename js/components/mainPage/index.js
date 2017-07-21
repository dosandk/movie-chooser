import React from 'react';
import MovieDetailsContainer from '../../containers/movieDetails';
import Filter from '../../containers/filter';
import Carousel from '../../containers/carousel';
import VotingHistoryContainer from '../../containers/votingHistory';
import styles from './mainPage.scss';

const mainPage = () => {
  return (
    <div className={styles['main-page-wrapper']}>
      <VotingHistoryContainer/>
      <div className={styles['movie-filter-wrapper']}>
        <MovieDetailsContainer/>
        <Filter/>
      </div>
      <Carousel/>
    </div>
  );
};

export default mainPage;
