import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    inputSearch: '',
    page: 1,
    per_page: 12,
    key: '36681363-b7657bef76d16cbfae88b6c43',
  };

  async componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      const { inputSearch, page, per_page, key } = this.state;
      const response = await fetch(
        `https://pixabay.com/api/?q=${inputSearch}&${page}&key=${key}&image_type=photo&orientation=horizontal&${per_page}`
      );
      const data = await response.json();

      this.setState(prevState => ({ ...prevState, images: data.hits }));
    } catch (error) {
      console.log('Error', error);
    }
  };
  onSubmit = () => {
    console.log('zeby coś było - tu warunki i fetch chyba');
  };

  render() {
    return (
      <div>
        React homework template
        <Searchbar onSubmit={this.onSubmit} />
      </div>
    );
  }
}
