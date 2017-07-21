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
    this.props.actions.selectMovie(this.props.movie);
  }

  onRemoveHandler() {
    this.props.actions.movieDislike(this.props.movie.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return true;
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
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CarouselItemContainer);
