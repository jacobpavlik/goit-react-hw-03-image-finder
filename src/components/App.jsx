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

  handleSubmit = e => {
    e.preventDefault();
    this.inputSearch = e.target.elements.inputSearch.value;
    console.log('fetch - nowe zdjęcia');
  };
  // handleChange(e) {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({ ...prevState, [name]: value }));
  // }

  render() {
    console.log(this.state.images, 'tutaj zaostała przekazana tablica obrazów');
    return (
      <div>
        React homework template
        <Loader />
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
