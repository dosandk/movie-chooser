import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../components/movieDetails';

class MovieDetailsContainer extends Component {
  render() {
    return (
      <MovieDetails/>
    );
  }
}

export default connect()(MovieDetailsContainer);
