import React from 'react';
import AddBook from './AddBook';
import BookItem from './BookItem';

const e = this;
const BookList = () => (
  <div>
    <ul>
      {e.props.books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBooksProps={e.props.deleteBooksProps}
        />
      ))}
    </ul>
    <AddBook />
  </div>

);
export default BookList;
