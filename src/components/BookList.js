import React from 'react';
import AddBook from './AddBook';
import BookItem from './BookItem';

class BookList extends React.Component {
  render() {
    return (
        
      <div>
        <ul>
          {this.props.books.map((book) => (<BookItem key={book.id} book={book} deleteBooksProps = {this.props.deleteBooksProps} />))}
        </ul>
        <AddBook />
      </div>
      
    );
  }
}
export default BookList;
