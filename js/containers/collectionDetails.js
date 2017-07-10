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
    this.itemsListGrowthIndex = 9;
    this.state = {
      showCount: this.itemsListGrowthIndex
    };
    this.onScroll = this.onScroll.bind(this);
    this.routeRender = this.routeRender.bind(this);
  }

  get collection() {
    const {moviesCollections} = this.props;

    return moviesCollections;
  }

  get bottomScroll() {
    const bottomScroll = clientHeight => {
      return (scrollHeight, scrollTop) => scrollHeight - scrollTop - clientHeight;
    };
    const {scrollHeight, scrollTop, clientHeight} = this.elToScroll;
    const elementBottomScroll = bottomScroll(clientHeight);

    return elementBottomScroll(scrollHeight, scrollTop);
  }

  onScroll() {
    const valForLoading = 50;

    if (this.bottomScroll <= valForLoading) {
      this.setState(state => ({showCount: state.showCount + this.itemsListGrowthIndex}));
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
      .filter((movie, index) => index < this.state.showCount)
      .map(movie => (<CollectionDetailsItemContainer key={movie.id} movie={movie} match={this.props.match}/>));
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
