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


