import FilterLink from 'components/filter-link';
import {allTodos, completedTodos, activeTodos} from 'redux/modules/filter-todos';

const TodoFilter = () => (
  <div>
    Filter:
    <FilterLink action={allTodos}>All</FilterLink>
    <FilterLink action={completedTodos}>Completed</FilterLink>
    <FilterLink action={activeTodos}>Active</FilterLink>
  </div>
)

export default TodoFilter;
