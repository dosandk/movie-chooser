import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carouselItemActions from '../actions/carouselItem';
import CarouselItemContainer from './carouselItem';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.renderCarouselList = this.renderCarouselList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.movies !== nextProps.movies) {
      this.props.actions.getMovie(nextProps.movies[0].imdbID);
    }
  }

  renderCarouselList() {
    return this.props.movies.map(movie => <CarouselItemContainer key={movie.imdbID} movie={movie}/>);
  }

  render() {
    return (
      <div>
        {this.renderCarouselList()}
      </div>
    );
  }
}

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.movies && state.movies.Search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carouselItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
