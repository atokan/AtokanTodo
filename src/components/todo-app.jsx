import TodoHeader from 'components/todo-header';
import TodoList from 'components/todo-list';
import AddTodo from 'components/add-todo';
import TodoFilter from 'components/todo-filter';

const TodoApp = () => (
  <div className="todo-app">
    <TodoHeader />
    <AddTodo />
    <TodoList />
    <TodoFilter />
    <style jsx>{`
      .todo-app {
        background: #ecf0f1
        border-radius: 4px 4px 4px 4px;
        width: 100%;
        box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
        max-width: calc(100% - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
)

export default TodoApp;
