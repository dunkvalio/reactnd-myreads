import React from 'react';
import Book from './Book';

const Shelf = ({ title, data }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {data.map(book => (
            <li key={book.title}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;