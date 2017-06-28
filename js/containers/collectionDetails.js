import React, { Component } from 'react';
import CollectionDetailsItemContainer from './collectionDetailsItem';
import movies from '../api/movies.mock';

class CollectionDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: movies
    };
  }

  get itemsList() {
    return this.state.collection.results.map(movie => <CollectionDetailsItemContainer key={movie.id} movie={movie}/>);
  }

  render() {
    return (
      <div>
        {this.itemsList}
      </div>
    );
  }
}

export default CollectionDetailsContainer;
