import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          //   id={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          alt={image.tags}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  name: PropTypes.string,
};

// import PropTypes from 'prop-types';
// export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
//   return (
//     <li key={image.id} class="gallery-item">
//       <img
//         src={image.webformatURL}
//         alt={image.tags}
//         large={image.largeImageURL}
//       />
//     </li>
//   );
// };
// ImageGalleryItem.propTypes = {
//   id: PropTypes.number,
//   webformatURL: PropTypes.string,
//   alt: PropTypes.string,
//   largeImageURL: PropTypes.string,
// };
