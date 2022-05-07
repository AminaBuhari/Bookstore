import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CircularProgressBar from './CircularComponent';
import Chapter from './Chapter';
import { deletedBooks } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="bookcard">
      <div className="cardwrap">
        <p className="action">Action</p>
        <li className="booktitle">{book.title}</li>
        <li className="author">{book.author}</li>
        <div id ="feedback">
          <p>Comments</p>
          <button id="remove" type="button" onClick={() => { dispatch(deletedBooks(book.id)); }}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div>
        <CircularProgressBar
          strokeWidth="10"
          sqSize="200"
          percentage="25"
        />
      </div>
      <div id="chapterblock">
        <Chapter />
      </div>

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
