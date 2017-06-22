import React from 'react';
import MovieDetailsContainer from '../../containers/movieDetails';
import Filter from '../../containers/filter';
import Carousel from '../../containers/carousel';
import styles from './mainPage.scss';

const mainPage = () => {
  return (
    <div className={styles['main-page-wrapper']}>
        <MovieDetailsContainer/>
        <Filter/>
      <Carousel movies={[]}/>
    </div>
  );
};

export default mainPage;
