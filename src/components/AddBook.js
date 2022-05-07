import React from 'react';
import { useDispatch } from 'react-redux';
import { pushBookManually } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(pushBookManually(title, author));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div id="Addbook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input id="titleinput" type="text" placeholder="Book title" name="title" />
        <input id="authorinput" type="text" placeholder="Author" name="author" />
        <button id="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
