import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({ title, data, onShelfUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {data.map(book => (
            <li key={book.id}>
              <Book book={book} onUpdate={onShelfUpdate}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func,
}

export default Shelf;