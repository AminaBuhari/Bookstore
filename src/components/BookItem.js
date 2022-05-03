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
  // eslint-disable-next-line react/require-default-props
  book: PropTypes.element({
    title: PropTypes.string,
    author: PropTypes.string,
  }),
  // eslint-disable-next-line react/require-default-props
  deleteBooksProps: PropTypes.func,

};

export default BookItem;
