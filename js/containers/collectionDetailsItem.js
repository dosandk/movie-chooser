import React from 'react';
import { Link } from 'react-router-dom';
import CollectionDetailsItem from '../components/collectionDetailsItem';

const CollectionDetailsItemContainer = ({match, movie}) => {
  return (
    <Link to={`${match.url}/${movie.id}`}>
      <CollectionDetailsItem movie={movie}/>
    </Link>
  );
};

export default CollectionDetailsItemContainer;
