import React, { Component } from 'react';
import {connect} from 'react-redux';
import CollectionDetailsItemContainer from './collectionDetailsItem';

class CollectionDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCount: 6
    };

    this.onScroll = this.onScroll.bind(this);
  }

  get collection() {
    const {moviesCollections} = this.props;

    return moviesCollections;
  }

  onScroll() {
    const valForLoading = 50;
    const bottomScroll = this.elToScroll.scrollHeight - this.elToScroll.scrollTop - this.elToScroll.clientHeight;

    if (bottomScroll <= valForLoading) {
      this.setState({showCount: this.state.showCount + 6});
    }
  }

  componentDidMount() {
    this.elToScroll.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.elToScroll.removeEventListener('scroll', this.onScroll);
  }

  get itemsList() {
    // TODO: optimization
    const result = this.collection.slice(0, this.state.showCount)
      .map(movie => <CollectionDetailsItemContainer key={movie.id} movie={movie}/>);

    return result;
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
      </div>
    );
  }
}

const mapStateToProps = ({moviesCollections}) => ({moviesCollections});

export default connect(mapStateToProps, null)(CollectionDetailsContainer);
