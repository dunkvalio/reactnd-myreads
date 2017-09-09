import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../utils/BooksAPI';
import Shelf from '../components/Shelf'

class Main extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    api.getAll().then(books => {
      this.setState({
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read'),
      })
    });
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading" data={currentlyReading} />
          <Shelf title="Want to Read" data={wantToRead} />
          <Shelf title="Read" data={read} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;
