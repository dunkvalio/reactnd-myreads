import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf'

const Main = ({ books, onUpdate }) => {
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');
  const read = books.filter(book => book.shelf === 'read');

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf title="Currently Reading" data={currentlyReading} onShelfUpdate={onUpdate} />
        <Shelf title="Want to Read" data={wantToRead} onShelfUpdate={onUpdate} />
        <Shelf title="Read" data={read} onShelfUpdate={onUpdate} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

Main.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default Main;
