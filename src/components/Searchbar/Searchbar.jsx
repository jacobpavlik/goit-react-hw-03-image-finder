import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <header class="searchbar">
          <form class="form">
            <button type="submit" className="button" onClick={onSubmit}>
              <span class="button-label">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>

            <input
              value={this.inputSearch}
              name="searchbarInput"
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
Searchbar.propTypes = {
  searchInput: PropTypes.string,
};
