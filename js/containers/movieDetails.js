import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../components/movieDetails';

class MovieDetailsContainer extends Component {
  render() {
    return (
      <MovieDetails {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  };
}

export default connect(mapStateToProps)(MovieDetailsContainer);
