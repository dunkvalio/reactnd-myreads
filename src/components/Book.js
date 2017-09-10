import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../utils/BooksAPI';

const shelves = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read',
  none: 'None'
}

class Book extends React.Component {
  addBookToShelf = (event) => {
    const { book, onUpdate } = this.props;
    const shelf = event.target.value;

    api.update(book, shelf)
      .then(() => {
        onUpdate && onUpdate();
      })
      .catch(e => {
        console.log(e);
        alert(`Failed to add "${book.title}" to "${shelves[shelf]}"`);
      });
  }

  render() {
    const { book } = this.props;
    const { title, authors, imageLinks, shelf } = book;
    const { thumbnail } = imageLinks;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}/>
          <div className="book-shelf-changer">
            <select defaultValue={shelf} onChange={this.addBookToShelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(', ')}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdate: PropTypes.func,
}

export default Book;
