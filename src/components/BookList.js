import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
          />
        ))}
      </ul>
      <AddBook />
    </div>

  );
};

export default BookList;
