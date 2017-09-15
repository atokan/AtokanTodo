import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from 'redux/modules/todos';

let TodoList = ({todos, dispatch}) => (
  <ul>
    {
      todos.map((todo) => {
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
  return { todos: state.todos }
}

TodoList = connect(mapStateToProps)(TodoList)

TodoList.propTypes = {
  todos: PropTypes.array,
}

export default TodoList;
