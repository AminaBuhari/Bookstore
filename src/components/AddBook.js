import React from 'react';
import { useDispatch } from 'react-redux';
import { addbook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addbook(title, author));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" name="title" />
        <input type="text" placeholder="Author" name="author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
