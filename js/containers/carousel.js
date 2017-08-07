import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../actions/movieItem';
import CarouselItemContainer from './carouselItem';

const wrapper = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px'
};

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.getMovies(this.props.votingHistory, this.props.currentVotingIndex)
    };

    this.renderCarouselList = this.renderCarouselList.bind(this);
  }

  getMovies(votingHistoryArray, currentVotingIndex) {
    const currentMovies = votingHistoryArray[currentVotingIndex].allMovies;
    const chosenMovies = votingHistoryArray[currentVotingIndex].chosenMovies;
    const movies = this.props.allMovies.filter(item => currentMovies.includes(item.id));

    return movies.map(item => {
      if (chosenMovies.includes(item.id)) {
        item.votingRate = 1;
      } else {
        item.votingRate = 0;
      }

      return {...item};
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVotingIndex <= nextProps.votingHistory.length - 1) {
      this.setState(
        {
          movies: this.getMovies(nextProps.votingHistory, nextProps.currentVotingIndex)
        }
      );
    }
  }

  renderCarouselList() {
    const selectedMovieId = this.props.votingHistory[this.props.currentVotingIndex].selectedMovie;

    return this.state.movies.map(movie => <CarouselItemContainer key={movie.id} movie={movie} selectedMovieId={selectedMovieId}/>);
  }

  render() {
    return (
      <div style={wrapper}>
        {this.renderCarouselList()}
      </div>
    );
  }
}

Carousel.propTypes = {
  actions: PropTypes.object.isRequired,
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentVotingIndex: PropTypes.number.isRequired,
  votingHistory: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps({allMovies, currentVotingIndex, votingHistory}) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
