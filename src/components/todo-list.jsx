import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from 'redux/modules/todos';
import { filterTodos } from 'redux/modules/filter-todos'


let TodoList = ({todos, filter, dispatch}) => (
  <ul className="todo-list">
    {
      todos.filter(todo => filterTodos(todo, filter)).map((todo) => {
        return (
          <li key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={todo.completed ? 'todo-list__item--completed' : 'todo-list__item--active'}>
            {todo.text}
          </li>
        );
      })
    }
    <style jsx>{`
      .todo-list {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
      }

      [class^="todo-list__item"] {
        cursor: pointer;
        height: 80px;
        display: block;
        color: #af544f;
        box-sizing: border-box;
        padding: 27px 33px 0 78px;
        box-shadow: 0 1px 0 0 #e6e6e6, 0 2px 0 0 white;
        background-image: url('/public/images/box.svg');
        background-repeat: no-repeat;
        background-position: 28px 16px;
      }

      .todo-list__item--completed {
        color: #16a085;
        background-image: url('/public/images/done.svg');
        text-decoration: line-through;
      }
    `}</style>
  </ul>
);

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filterTodos
  }
}

TodoList = connect(mapStateToProps)(TodoList)

TodoList.propTypes = {
  todos: PropTypes.array,
}

export default TodoList;
