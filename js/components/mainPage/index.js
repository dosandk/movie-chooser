import React from 'react';
import MovieDetailsContainer from '../../containers/movieDetails';
import Filter from '../../containers/filter';
import Carousel from '../../containers/carousel';

const mainPage = () => {
  return (
    <div>
      <MovieDetailsContainer/>
      <Filter/>
      <Carousel movies={[]}/>
    </div>
  );
};

export default mainPage;
