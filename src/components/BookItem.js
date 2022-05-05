import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <li>{book.title}</li>
      <li>{book.author}</li>
      <button type="button" onClick={() => { dispatch(removebook(book.id)); }}>Remove</button>
    </div>

  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,

};

export default BookItem;
