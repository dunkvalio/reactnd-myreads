import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, authors, imageLinks, shelf } = book;
  const thumbnail = imageLinks.thumbnail;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}/>
        <div className="book-shelf-changer">
          <select defaultValue={shelf}>
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

Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book;
