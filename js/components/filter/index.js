import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.props.searchMovies(this.searchInput.value);
  }

  render() {
    return (
      <div>Filter
        <input type="text"
               ref={input => {
                 this.searchInput = input;
               }} />
        <button onClick={this.handleBtnClick}>Search</button>
      </div>
    );
  }
}

export default Filter;
