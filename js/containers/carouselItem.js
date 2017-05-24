import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/carouselItem';
import CarouselItem from '../components/carouselItem';

class CarouselItemContainer extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.actions.getMovie(this.props.movie.imdbID);
  }

  render() {
    return (
      <CarouselItem movieItem={this.props.movie} onItemClick={this.onClickHandler}/>
    );
  }
}

CarouselItemContainer.propTypes = {
  movie: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CarouselItemContainer);
