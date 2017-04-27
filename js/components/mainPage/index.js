import React from 'react';
import MovieDetailsContainer from '../../containers/movieDetails';
import Filter from '../../containers/filter';

const mainPage = () => {
  return (
    <div>
      <MovieDetailsContainer/>
      <Filter/>
    </div>
  );
};

export default mainPage;
