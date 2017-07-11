import React, {Component} from 'react';
import styles from './filter.scss';
import {TextField, Slider, SelectField, MenuItem, RaisedButton} from 'material-ui';
import genres from '../../config/genres-config';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.minYear = 1970;
    this.maxYear = new Date().getFullYear();

    this.state = {
      filterYear: this.maxYear,
      sliderCoords: {
        top: 0,
        left: 0
      },
      movieGenre: 1,
      sliderPoint: null
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSliderDragStop = this.handleSliderDragStop.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.renderGenresOptionList = this.renderGenresOptionList.bind(this);
  }

  componentDidMount() {
    const sliderPoint = document.querySelector('[name=filterYear]').previousElementSibling.querySelectorAll('div');

    this.setState({
      sliderPoint: sliderPoint[sliderPoint.length - 1]
    });
  }

  handleBtnClick() {
    this.props.searchMovies(this.searchInput);
  }

  handleSliderChange(e, value) {
    this.setState({
      filterYear: value,
      sliderCoords: this.getCoords(this.state.sliderPoint)
    });
  }

  handleSliderDragStop() {
    this.setState({
      sliderCoords: this.getCoords(this.state.sliderPoint)
    });
  }

  handleGenreChange(e, index, value) {
    this.setState({
      movieGenre: value
    });
  }

  getCoords(elem) {
    const box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  renderGenresOptionList() {
    return genres.map((genre, key) => <MenuItem value={key} primaryText={genre}/>);
  }

  render() {
    return (
      <div className={styles.filter}>
        <TextField
          hintText="Movie title"
          type="text"
          name="searchInput"
          onChange={(e, value) => {
            this.searchInput = value;
          }}
        />
        {this.state.sliderCoords.top > 0 && <div className={styles['slider-value']} style={{
          left: this.state.sliderCoords.left - 6,
          top: this.state.sliderCoords.top - 20
        }}>
          {this.state.filterYear}
        </div>}
        <Slider
          name="filterYear"
          min={this.minYear}
          max={this.maxYear}
          step={1}
          defaultValue={2017}
          value={this.state.filterYear}
          onChange={this.handleSliderChange}
          onDragStop={this.handleSliderDragStop}
        />
        <div className={styles['year-range']}>
          <div>{this.minYear}</div>
          <div>{this.maxYear}</div>
        </div>
        <SelectField
          value={this.state.movieGenre}
          onChange={this.handleGenreChange}
        >
          {this.renderGenresOptionList()}
        </SelectField>
        <RaisedButton
          label='Search'
          backgroundColor='#5cb85c'
          labelColor='#fff'
          className={styles['search-btn']}
          onClick={this.handleBtnClick}
        />
      </div>
    );
  }
}

export default Filter;
