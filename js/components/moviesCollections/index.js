import React from 'react';
import CollectionDetailsContainer from '../../containers/collectionDetails';
import styles from './moviesCollections.scss';

const MoviesCollections = () => (
    <CollectionDetailsContainer className={styles['collection-details']}/>
);

export default MoviesCollections;
