import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let TodoList = (props) => (
  <ul>
    {
      props.todos.map((todo) => (<li key={todo.id}>{todo.text}</li>))
    }
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
