import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';
export const Loader = () => {
  return (
    <div class="overlay">
      <div class="modal">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

Loader.propTypes = {
  name: PropTypes.string,
};
