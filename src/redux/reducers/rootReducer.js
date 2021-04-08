import {combineReducers} from 'redux';
import noteReducer from './noteReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  categories: categoriesReducer,
});
export default rootReducer;
