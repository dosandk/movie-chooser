import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MovieDetails from '../components/movieDetails';
import * as movieActions from '../actions/movieItem';

class MovieDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handleMovieDislike = this.handleMovieDislike.bind(this);
  }

  handleMovieLike() {
    this.props.actions.movieLike(this.props.movie.id);
  }

  handleMovieDislike() {
    this.props.actions.movieDislike(this.props.movie.id);
  }

  render() {
    return (
      <MovieDetails {...this.props} movieLikeHandler={this.handleMovieLike} movieDislikeHandler={this.handleMovieDislike}/>
    );
  }
}

MovieDetailsContainer.propTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movie: state.voting.votingHistory[state.voting.currentVotingIndex].selectedMovie
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
