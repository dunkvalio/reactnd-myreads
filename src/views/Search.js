import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import * as api from '../utils/BooksAPI';
import Book from '../components/Book';

class Search extends React.Component {
  state = {
    books: [],
  }

  componentWillReceiveProps({ bookIndex }) {
    this.setState({
      books: this.state.books.map(book => this.syncBookShelf(book, bookIndex)),
    });
  }

  syncBookShelf = (book, index) => {
    book.shelf = index[book.id] ||  'none';
    return book;
  }

  searchBooks = () => {
    const query = this.refs.searchInput.value;
    if(query) {
      const { bookIndex } = this.props;
      api.search(query)
        .then(books => books.map(book => this.syncBookShelf(book, bookIndex)))
        .then(books => this.setState({ books }))
        .catch(e => this.setState({ books: [] }));
    }
  }

  render() {
    const { books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              ref="searchInput"
              placeholder="Search by title or author"
              onChange={_.debounce(this.searchBooks, 200)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books && books.map(book => (
              <li key={book.id}>
                <Book book={book} onUpdate={this.props.onBooksUpdated} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  bookIndex: PropTypes.object.isRequired,
  onBooksUpdated: PropTypes.func.isRequired,
}

export default Search;
