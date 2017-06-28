import React, { Component } from 'react';
import CollectionDetailsItem from '../components/collectionDetailsItem';

class CollectionDetailsItemContainer extends Component {
  render() {
    return (
     <CollectionDetailsItem movie={this.props.movie}/>
    );
  }
}

export default CollectionDetailsItemContainer;
