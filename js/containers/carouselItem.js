import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movieItem';
import CarouselItem from '../components/carouselItem';

class CarouselItemContainer extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
  }

  onClickHandler() {
    if (this.props.selectedMovieId !== this.props.movie.id) {
      this.props.actions.selectMovie(this.props.movie.id);
    }
  }

  onRemoveHandler() {
    this.props.actions.movieDislike(this.props.movie.id);
  }

  render() {
    return (
      <CarouselItem
        movieItem={this.props.movie}
        onItemClick={this.onClickHandler}
        onItemRemove={this.onRemoveHandler}
      />
    );
  }
}

CarouselItemContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  selectedMovieId: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CarouselItemContainer);
