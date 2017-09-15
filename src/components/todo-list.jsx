import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from 'redux/modules/todos';
import { filterTodos } from 'redux/modules/filter-todos'


let TodoList = ({todos, filter, dispatch}) => (
  <ul>
    {
      todos.filter(todo => filterTodos(todo, filter)).map((todo) => {
        return (
          <li key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </li>
        );
      })
    }
    <style jsx>{`
      .completed {
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
