import { createStore, combineReducers } from 'redux';
import todos from './modules/todos';
import filterTodos from './modules/filter-todos';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash/throttle';

const mainReducer = combineReducers({todos, filterTodos})
const persistedState = loadState();

const store = createStore(
  mainReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

export default store;
