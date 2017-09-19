import TodoHeader from 'components/todo-header';
import TodoList from 'components/todo-list';
import AddTodo from 'components/add-todo';
import TodoFilter from 'components/todo-filter';

const TodoApp = () => (
  <div className="todo-app">
    <TodoHeader />
    <TodoFilter />
    <AddTodo />
    <TodoList />
    <style jsx>{`
      .todo-app {
        background: #ecf0f1;
        border-radius: 4px 4px 4px 4px;
        width: 100%;
        box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
        max-width: calc(100% - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');

      @font-face {
        font-family: 'OpenSans';
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
      }

      body {
        font-family: 'OpenSans', sans-serif;
        background: #bdc3c7;
        margin: 0;
      }

      #root {
        max-width: 730px;
        width: 100%;
        position: relative;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }
      `}</style>
  </div>
)

export default TodoApp;
