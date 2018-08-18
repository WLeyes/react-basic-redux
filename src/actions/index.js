export function selectBook(book){
  // selectBook ia an ActionCreator, it needs to return an action object with a type;
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}