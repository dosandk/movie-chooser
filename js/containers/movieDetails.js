import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MovieDetails from '../components/movieDetails';
import * as movieActions from '../actions/movieItem';

class MovieDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: this.getMovie(this.props.votingHistory, this.props.currentVotingIndex)
    };

    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handleMovieDislike = this.handleMovieDislike.bind(this);
  }

  getMovie(votingHistoryArray, currentVotingIndex) {
    const movieId = votingHistoryArray[currentVotingIndex].selectedMovie;
    const selectedMovie = this.props.allMovies.find(item => item.id === movieId);

    return votingHistoryArray[currentVotingIndex].chosenMovies.includes(selectedMovie.id) ? {...selectedMovie, votingRate: 1} : {...selectedMovie, votingRate: 0};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVotingIndex <= nextProps.votingHistory.length - 1) {
      this.setState(
        {
          movie: this.getMovie(nextProps.votingHistory, nextProps.currentVotingIndex)
        }
      );
    }
  }

  handleMovieLike() {
    this.props.actions.movieLike(this.state.movie.id);
  }

  handleMovieDislike() {
    this.props.actions.movieDislike(this.state.movie.id);
  }

  render() {
    return (
      <MovieDetails
        movie={this.state.movie}
        movieLikeHandler={this.handleMovieLike}
        movieDislikeHandler={this.handleMovieDislike}
      />
    );
  }
}

MovieDetailsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentVotingIndex: PropTypes.number.isRequired,
  votingHistory: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps({allMovies, currentVotingIndex, votingHistory}) {
  // movie.votingRate = state.votingHistory[state.currentVotingIndex].chosenMovies.includes(currentMovieIndex) ? 1 : 0;
  return {
    allMovies,
    currentVotingIndex,
    votingHistory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
