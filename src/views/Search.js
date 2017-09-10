import React from 'react';
import _ from 'lodash';
import * as api from '../utils/BooksAPI';
import Book from '../components/Book';

class Search extends React.Component {
  state = {
    books: [],
  }

  searchBooks = () => {
    const query = this.refs.searchInput.value;
    if(query) {
      api.search(query)
        .then(books => this.setState({ books }))
        .catch(e => this.setState({ books: [] }));
    }
  }

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.history.goBack}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              ref="searchInput"
              placeholder="Search by title or author"
              onChange={_.throttle(this.searchBooks, 2000)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books && books.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
