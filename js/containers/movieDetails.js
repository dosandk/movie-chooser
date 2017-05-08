import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../components/movieDetails';

class MovieDetailsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.movie && <MovieDetails {...this.props}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  };
}

export default connect(mapStateToProps)(MovieDetailsContainer);
