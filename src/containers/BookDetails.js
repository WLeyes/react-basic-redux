import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  render() {
    if(!this.props.book) {
      return <div>Please select a book</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: { this.props.book.title }</div>
        <div>Pages: { this.props.book.pages }</div>
      </div>
    )
  }
}

// Whatever is returned is made available as props inside BookList
function mapStateToProps(state) {
  return {book: state.activeBook}
};

// Promote BookList from a Component to a Container 
// it needs to knowabout this new dispatch method, selectBook and 
// make it available as a prop. https://redux.js.org/basics/usagewithreact
export default connect(mapStateToProps)(BookDetails);