import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    images: [],
    inputSearch: '',
    isModalOpen: false,
    page: 1,
  };

  async componentDidMount() {
    this.fetchImages();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      console.log('aktualizuje dane i pobiera fetcha');
      this.fetchImages();
    }
  }

  // Poprawiony setState z callbackiem

  fetchImages = async () => {
    try {
      const { inputSearch, page } = this.state;
      console.log(inputSearch);
      const response = await fetch(
        `https://pixabay.com/api/?q=${inputSearch}&page=${page}&key=36681363-b7657bef76d16cbfae88b6c43&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      return data;
      // this.setState(prevState => ({ ...prevState, images: data.hits }));
    } catch (error) {
      console.log('Error', error);
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.inputSearch = e.target.elements.inputSearch.value;
    //console.log('fetch - nowe zdjęcia', this.inputSearch);
    this.setState(
      prevState => {
        return {
          ...prevState,
          inputSearch: this.inputSearch,
        };
      },
      async () => {
        try {
          const response = await this.fetchImages();
          if (response.code !== 'ERR_NETWORK') {
            console.log(response);
            this.setState(prevState => ({
              ...prevState,
              images: response.hits,
            }));
          } else {
            console.log(`${response.code}`);
          }
        } catch (error) {
          console.log(`${error}`);
        }
      }
    );
  };
  //       jak najmniej w state ma być - dodaję na sztywno, pozostawiam tylko inputSearch(wyszukiwanie) i page(loadMore)
  //       `https://pixabay.com/api/?q=${inputSearch}&${page}&key=${key}&image_type=photo&orientation=horizontal&${perPage}`

  //console.log('inputsearch po handleSubmit', this.inputSearch);
  // this.fetchImages();
  // this.setState({ inputSearch: '' });
  // koniec poprawionego setState z callbackiem
  handleLoadMore = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
    console.log('Wgrywam - strona:', this.state.page);
  };

  toggleModal = e => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    this.largeImageURL = e.target.dataset.large;
    this.alt = e.target.dataset.alt;
    window.addEventListener('keyup', this.handleModalOnKey);
  };
  handleModalOnKey = e => {
    if (e.key === 'Escape') {
      this.setState(prevState => {
        return {
          isModalOpen: false,
        };
      });
      this.largeImageURL = '';
      this.alt = '';
      window.removeEventListener('keyup', this.handleModalOnKey);
    }
  };

  render() {
    console.log(this.state.images, 'tutaj zaostała przekazana tablica obrazów');
    return (
      <div className={css.app}>
        {/* <Loader /> */}
        <Searchbar onSubmit={this.handleSubmit} />
        {console.log('inputSearch po render', this.inputSearch)}
        <ImageGallery images={this.state.images} action={this.toggleModal} />
        <Button label="Load More" action={this.handleLoadMore} />
        <Modal
          largeImageURL={this.largeImageURL}
          alt={this.alt}
          action={this.toggleModal}
          actionKey={this.handleModalOnKey}
          modal={this.state.isModalOpen}
        />
      </div>
    );
  }
}
