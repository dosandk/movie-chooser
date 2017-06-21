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
      this.props.actions.selectMovie(nextProps.movies[0]);
    }
  }

  renderCarouselList() {
    return this.props.movies.map(movie => <CarouselItemContainer key={movie.id} movie={movie}/>);
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
    movies: state.movies && state.movies.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carouselItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
