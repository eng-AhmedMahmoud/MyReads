import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import BookList from "./Components/BookList";
import BookSearch from "./Components/BooksSearch";
import "./App.css";

class BooksApp extends Component {
  state = {
    Books: [],
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        Books: books,
      }));
    });
  };

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <BookList 
                books={this.state.Books} 
                onChange={this.updateBooks} />
            </Route>
            <Route exact path="/search">
              <BookSearch
                onChange={this.updateBooks}
                searchableBooks={this.state.Books}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;