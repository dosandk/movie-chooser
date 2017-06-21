import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieDetails from '../components/movieDetails';

class MovieDetailsContainer extends Component {
  render() {
    return (
      <MovieDetails {...this.props}/>
    );
  }
}

MovieDetailsContainer.propTypes = {
  movie: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  };
}

export default connect(mapStateToProps)(MovieDetailsContainer);
