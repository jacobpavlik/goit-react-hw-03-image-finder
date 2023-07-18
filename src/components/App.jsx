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
    page: 1,
    per_page: 12,
    key: '36681363-b7657bef76d16cbfae88b6c43',
    isModalOpen: false,
  };

  async componentDidMount() {
    this.fetchImages();
  }
  // Poprawiony setState z callbackiem

  fetchImages = async () => {
    try {
      const { inputSearch, page, per_page, key } = this.state;
      console.log(inputSearch);
      const response = await fetch(
        `https://pixabay.com/api/?q=${inputSearch}&${page}&key=${key}&image_type=photo&orientation=horizontal&${per_page}`
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
    //console.log('inputsearch po handleSubmit', this.inputSearch);
    // this.fetchImages();
    // this.setState({ inputSearch: '' });
  };
  // koniec poprawionego setState z callbackiem
  handleLoadMore = () => {
    console.log('Wciskam i wgrywa się wiecej, jeśli są');
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
          isModal: false,
          // largeImageURL: '',
          // alt: '',
        };
      });
      this.largeImageURL = '';
      this.alt = '';
      window.removeEventListener('keyup', this.handleModalOnKey);
    }
  };
  // closeModalOnKey = e => {
  //   if (e.key === 'Escape') {
  //     this.setState(prevState => ({ isModalOpen: false }));
  //   }
  // };

  //  isModalOpen && isModalOpen: false

  // closeModalOnKey = e => {
  //   if ('key' in e && e.key === 'Escape') {
  //     this.setState(prevState => ({ isModalOpen: false }));
  //   }
  // };

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

//linijki 19 do 50
// fetchImages = async () => {
//    try {
//      const { inputSearch, page, per_page, key } = this.state;
//      console.log('Fetch - try', inputSearch);
//      const response = await fetch(
//        `https://pixabay.com/api/?q=${inputSearch}&${page}&key=${key}&image_type=photo&orientation=horizontal&${per_page}`
//      );
//      const data = await response.json();
//
//      this.setState(prevState => ({ ...prevState, images: data.hits }));
//   } catch (error) {
//      console.log('Error', error);
//    }
//  };
//
//  handleSubmit = e => {
//    e.preventDefault();
//   this.inputSearch = e.target.elements.inputSearch.value;
//    console.log('fetch - nowe zdjęcia', this.inputSearch);
//    this.setState(prevState => ({
//     ...prevState,
//      inputSearch: this.inputSearch,
//    }));
//   console.log('inputsearch po handleSubmit', this.inputSearch);
//    this.fetchImages();
//    console.log('inputsearch po fetchImages', this.inputSearch);
//    // this.setState({ inputSearch: '' });
//  };
//  // handleChange(e) {
//  //   const { name, value } = e.target;
//  //   this.setState(prevState => ({ ...prevState, [name]: value }));
//  // }
