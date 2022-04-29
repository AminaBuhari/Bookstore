import React from 'react';

class BookItem extends React.Component {
  render() {
    return (
        <div>
        <li>{this.props.book.title}</li>
        <li>{this.props.book.author}</li>
        <button type= "button" onClick={() => this.props.deleteBooksProps()}>Remove</button>
        </div>
     
    );
  }
}

export default BookItem;
