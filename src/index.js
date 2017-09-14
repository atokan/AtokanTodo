import { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import TodoHeader from 'components/todo-header';
import TodoList from 'components/todo-list';
import AddTodo from 'components/add-todo';

const todosReducer = (state = {todos: []}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            // id: action.id,
            text: action.text,
          // completed: false
          }
        ]})
    default:
      return state
  }
}

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class TodoApp extends React.Component {
  render() {
    return(
      <div>
        <TodoHeader />
        <AddTodo />
        <TodoList />
       </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("root")
)
