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

    this.renderCarouselList = this.renderCarouselList.bind(this);
  }

  renderCarouselList() {
    return this.props.movies.map(movie => <CarouselItemContainer key={movie.id} movie={movie} votingRate={movie.votingRate}/>);
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  const currentMovies = state.voting.votingHistory[state.currentVotingIndex].allMovies;
  const chosenMovies = state.voting.votingHistory[state.currentVotingIndex].chosenMovies;

  return {
    movies: state.voting.allMovies.filter((item, index) => {
      item.votingRate = chosenMovies.includes(index) ? 1 : 0;
      return currentMovies.includes(index);
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
