import React from 'react';

const e = this;
const BookItem = () => (
  <div>
    <li>{e.props.book.title}</li>
    <li>{e.props.book.author}</li>
    <button type="button" onClick={() => e.props.deleteBooksProps()}>
      Remove
    </button>
  </div>

);

export default BookItem;
