import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CircularProgressBar from './CircularComponent';
import Categories from './Categories';
import AddBook from './AddBook';
import BookList from './BookList';
import Header from './Header';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: 'The hunger Games',
          author: 'Suzanne Collins',
          id: 1,
        },
        {
          title: 'The Dune',
          author: 'Frank Herbert',
          id: 2,
        },
        {
          title: 'Capital in the Twenty-First Century',
          author: 'Suzanne Collins',
          id: 3,

        },
      ],
    };
  }


  delBooks = () => {
  };

  render() {
    const { books } = this.state;
    return (
      <div className='Wrapper'>
        <Header />
        <Routes>
          <Route exact path="/" element={<BookList books={books} deleteBooksProps={this.delBooks} />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
        <AddBook />

      </div>
    );
  }
}

export default Container;
