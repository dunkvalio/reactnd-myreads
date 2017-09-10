import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as api from './utils/BooksAPI';
import Search from './views/Search';
import Main from './views/Main';
import './App.css';

class BooksApp extends React.Component {
  state = {
    bookIndex: {},
    library: [],
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    api.getAll().then(books => this.onLibraryUpdate(books));
  }

  onLibraryUpdate = (books) => {
    this.setState({ library: books });
    this.setState({
      bookIndex: books.reduce((index, book) => {
        index[book.id] = book.shelf;
        return index;
      }, {})
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <Main books={this.state.library} onUpdate={this.fetchBooks}/>
          )}/>
          <Route exact path="/search" render={() => (
            <Search bookIndex={this.state.bookIndex} onBooksUpdated={this.fetchBooks} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
