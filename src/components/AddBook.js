import React from 'react';

class AddBook extends React.Component {
  render() {
    return (
      <div>
        <h2>ADD NEW BOOK</h2>
        <form>
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
          <button>ADD BOOK</button>
        </form>
      </div>

    );
  }
}
export default AddBook;
