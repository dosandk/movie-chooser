import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CollectionDetailsItem from '../components/collectionDetailsItem';

class CollectionDetailsItemContainer extends Component {
  render() {
    return (
      <Link to={`${this.props.match.url}/${this.props.movie.id}`}>
        <CollectionDetailsItem movie={this.props.movie}/>
     </Link>
    );
  }
}

export default CollectionDetailsItemContainer;
