import { createStore, combineReducers } from 'redux';
import todos from './modules/todos';
import filterTodos from './modules/filter-todos';
import { addTodo, toggleTodo} from './modules/todos';

const mainReducer = combineReducers({todos, filterTodos})

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addTodo("1st Todo"));
store.dispatch(addTodo("2nd Todo"));
store.dispatch(addTodo("3rd Todo"));
store.dispatch(toggleTodo(store.getState().todos[1].id));

export default store;
