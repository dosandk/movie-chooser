import React from 'react';

const Filter = ({searchMovies}) => {
  return (
    <div>Filter
      <button onClick={searchMovies}>Search</button>
    </div>
  );
};

export default Filter;
