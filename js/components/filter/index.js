import React, {Component} from 'react';
import styles from './filter.scss';
import {TextField, Slider, SelectField, MenuItem} from 'material-ui';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterYear: new Date().getFullYear(),
      sliderCoords: {
        top: 0,
        left: 0
      },
      movieGenre: 1
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleBtnClick() {
    this.props.searchMovies(this.searchInput);
  }

  handleSliderChange(e, value) {
    this.setState({
      filterYear: value,
      sliderCoords: this.getCoords(e.target)
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

  render() {
    const minYear = 1970;
    const maxYear = new Date().getFullYear();
    return (
      <div className={styles['filter']}>
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
          min={minYear}
          max={maxYear}
          step={1}
          defaultValue={2017}
          value={this.state.filterYear}
          onChange={this.handleSliderChange}
        />
        <div className={styles['year-range']}>
          <div>{minYear}</div>
          <div>{maxYear}</div>
        </div>
        <SelectField
          value={this.state.movieGenre}
          onChange={this.handleGenreChange}
        >
          <MenuItem value={1} primaryText="Genres"/>
          <MenuItem value={2} primaryText="Action"/>
          <MenuItem value={3} primaryText="Comedy"/>
          <MenuItem value={4} primaryText="Family"/>
          <MenuItem value={5} primaryText="History"/>
          <MenuItem value={6} primaryText="Mystery"/>
          <MenuItem value={7} primaryText="Sci-fi"/>
          <MenuItem value={8} primaryText="War"/>
        </SelectField>
        <button onClick={this.handleBtnClick}>Search</button>
      </div>
    );
  }
}

export default Filter;
