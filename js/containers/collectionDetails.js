import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Route} from 'react-router-dom';
import {goBack} from 'react-router-redux';
import CollectionDetailsItemContainer from './collectionDetailsItem';
import MovieInfo from '../components/movieInfo';
import {debounce} from '../utils/debounce';

class CollectionDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.itemsListGrowthIndex = 9;
    this.state = {
      showCount: this.itemsListGrowthIndex,
      clientHeight: ''
    };
    this.onScroll = debounce(this.onScroll.bind(this), 300);
    this.routeRender = this.routeRender.bind(this);
  }

  get collection() {
    const {moviesCollections} = this.props;

    return moviesCollections;
  }

  get bottomScroll() {
    const createBottomScrollGetter = clientHeight => {
      return (scrollHeight, scrollTop) => scrollHeight - scrollTop - clientHeight;
    };
    const {scrollHeight, scrollTop} = this.elToScroll;
    const getElementBottomScroll = createBottomScrollGetter(this.state.clientHeight);

    return getElementBottomScroll(scrollHeight, scrollTop);
  }

  onScroll() {
    const valForLoading = 50;

    if (this.bottomScroll <= valForLoading) {
      this.setState(state => ({showCount: state.showCount + this.itemsListGrowthIndex}));
    }
  }

  componentDidMount() {
    this.elToScroll.addEventListener('scroll', this.onScroll);
    this.setState({clientHeight: this.elToScroll.clientHeight});
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
