import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form onSubmit={onSubmit} className="form" name="searchform">
        <button type="submit" className="button" name="searchbtn">
          <span className="button-label">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </button>
        <input
          name="inputSearch"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// export class Searchbar extends Component {
//   state = {
//     inputSearch: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(e.target.value);
//   };
//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState(prevState => ({ ...prevState, [name]: value }));
//   }

//   render() {
//     const { onSubmit } = this.props;
//     return (
//       <div>
//         <header className="searchbar">
//           <form onSubmit={onSubmit} className="form">
//             <button type="submit" className="button">
//               <span className="button-label">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </span>
//             </button>

//             <input
//               onChange={this.handleChange}
//               value={this.inputSearch}
//               name="inputSearch"
//               className="input"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//             />
//           </form>
//         </header>
//       </div>
//     );
//   }
// }
Searchbar.propTypes = {
  searchInput: PropTypes.string,
};
