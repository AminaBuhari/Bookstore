/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class BookItem extends React.Component {
  render() {
    const e = this.props;
    return (
      <div>
        <li>{e.book.title}</li>
        <li>{e.book.author}</li>
        <button type="button" onClick={() => e.deleteBooksProps}>Remove</button>
      </div>

    );
  }
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deleteBooksProps: PropTypes.func.isRequired,

};

export default BookItem;
