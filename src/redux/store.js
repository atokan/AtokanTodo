import { createStore, combineReducers } from 'redux';
import todos from './modules/todos';
import filterTodos from './modules/filter-todos';

const mainReducer = combineReducers({todos, filterTodos})

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
