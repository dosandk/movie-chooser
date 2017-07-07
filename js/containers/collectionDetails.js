import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Route} from 'react-router-dom';
import {goBack} from 'react-router-redux';
import CollectionDetailsItemContainer from './collectionDetailsItem';
import MovieInfo from '../components/movieInfo';

class CollectionDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCount: 9
    };

    this.onScroll = this.onScroll.bind(this);
    this.routeRender = this.routeRender.bind(this);
  }

  get collection() {
    const {moviesCollections} = this.props;

    return moviesCollections;
  }

  get bottomScroll() {
    const {scrollHeight, scrollTop, clientHeight} = this.elToScroll;

    return scrollHeight - scrollTop - clientHeight;
  }

  onScroll() {
    const valForLoading = 50;

    if (this.bottomScroll <= valForLoading) {
      this.setState({showCount: this.state.showCount + 9});
    }
  }

  componentDidMount() {
    this.elToScroll.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.elToScroll.removeEventListener('scroll', this.onScroll);
  }

  get itemsList() {
    return this.collection
      .map((movie, index) => {
        let result;

        if (index < this.state.showCount) {
          result = (<CollectionDetailsItemContainer key={movie.id} movie={movie} match={this.props.match}/>);
        }
        return result;
      });
  }

  routeRender({match}) {
    const getMovie = el => el.id === parseInt(match.params.movieId, 10);

    return (
      <MovieInfo
        goBack={this.props.goBack}
        movie={this.collection.find(getMovie)}
      />
    );
  }

  render() {
    return (
      <div className={this.props.className}
        onScroll={this.onScroll}
        ref={el => {
          this.elToScroll = el;
        }
      }>
        {this.itemsList}
        <Route path={`${this.props.match.url}/:movieId`}
          render={this.routeRender}
        />
      </div>
    );
  }
}

const mapStateToProps = ({moviesCollections}) => ({moviesCollections});
const mapDispatchToProps = dispatch => bindActionCreators({goBack}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetailsContainer);
