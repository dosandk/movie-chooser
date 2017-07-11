import React from 'react';
import CollectionDetailsContainer from '../../containers/collectionDetails';
import styles from './moviesCollections.scss';

const MoviesCollections = ({match}) => (
    <CollectionDetailsContainer className={styles['collection-details']} match={match}/>
);

export default MoviesCollections;
