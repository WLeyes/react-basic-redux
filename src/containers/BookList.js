import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={ book.title }
            onClick={ () =>{ this.props.selectBook(book) } }
            className="list-group-item">{ book.title }
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

// Whatever is returned is made available as props inside BookList
function mapStateToProps(state) {
  return {books: state.books}
};

// Anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

// Promote BookList from a Component to a Container 
// it needs to knowabout this new dispatch method, selectBook and 
// make it available as a prop. https://redux.js.org/basics/usagewithreact
export default connect(mapStateToProps, mapDispatchToProps)(BookList);