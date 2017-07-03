import React, { Component } from 'react';
import {connect} from 'react-redux';
import CollectionDetailsItemContainer from './collectionDetailsItem';

class CollectionDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.collection = this.props.moviesCollections[0];
  }

  get itemsList() {
    return this.collection.results.map(movie => <CollectionDetailsItemContainer key={movie.id} movie={movie}/>);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.itemsList}
      </div>
    );
  }
}

const mapStateToProps = ({moviesCollections}) => ({moviesCollections});
export default connect(mapStateToProps, null)(CollectionDetailsContainer);
