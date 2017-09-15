import { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import store from 'redux/store';

import TodoHeader from 'components/todo-header';
import TodoList from 'components/todo-list';
import AddTodo from 'components/add-todo';

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

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("root")
)
