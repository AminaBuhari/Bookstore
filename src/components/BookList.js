import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);
   const dispatch = useDispatch();
  useEffect(() => {
  dispatch(getBooks())
  }, [dispatch]) 
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
