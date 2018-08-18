import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBook from '../reducers/ActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;