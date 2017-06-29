import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import CollectionDetailsItemContainer from './collectionDetailsItem';
// import * as collectionsActions from '../actions/moviesCollections';
// import movies from '../api/movies.mock';

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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(collectionsActions, dispatch);
// }
export default connect(mapStateToProps, null)(CollectionDetailsContainer);
