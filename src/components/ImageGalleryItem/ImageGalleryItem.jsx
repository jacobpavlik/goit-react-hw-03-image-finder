import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li key={id} class="gallery-item">
      <img src={webformatURL} alt={tags} large={largeImageURL} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
};
