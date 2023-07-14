import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.form);
  };

  render() {
    return (
      <div>
        React homework template
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
