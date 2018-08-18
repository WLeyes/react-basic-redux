import React, { Component } from 'react';

import BookList from '../containers/BookList';
import BookDetails from '../containers/BookDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetails />
      </div>
    );
  }
}

export default App;
