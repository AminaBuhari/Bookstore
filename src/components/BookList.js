/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './AddBook';
import BookItem from './BookItem';

class BookList extends React.Component {
  render() {
    const e = this.props;
    return (
      <div>
        <ul>
          {e.books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              deleteBooksProps={e.deleteBooksProps}
            />
          ))}
        </ul>
        <AddBook />
      </div>

    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(toString).isRequired,
  deleteBooksProps: PropTypes.func.isRequired,
};
export default BookList;
