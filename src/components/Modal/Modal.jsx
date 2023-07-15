// poprawiony setState z callbackiem
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
