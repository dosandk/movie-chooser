import React from 'react';
import CollectionDetailsContainer from '../../containers/collectionDetails';
import styles from './moviesCollections.scss';

const MoviesCollections = ({match}) => (
  <div>
    <CollectionDetailsContainer className={styles['collection-details']} match={match}/>
  </div>
);

export default MoviesCollections;
