// Actions
const ALL = 'AtokanTodo/filter-todos/ALL'
const COMPLETED = 'AtokanTodo/filter-todos/COMPLETED'
const ACTIVE = 'AtokanTodo/filter-todos/ACTIVE'

const initialState = ALL

// Reducer
export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ALL:
    case COMPLETED:
    case ACTIVE:
      return action.type
    default:
      return state;
  }
}

export function filterTodos (todo, filter) {
  switch(filter) {
    case ALL:
      return true;
    case COMPLETED:
      return todo.completed;
    case ACTIVE:
      return !todo.completed;
    default:
      return true;
  }
}

// Action Creators
export function allTodos() { return {type: ALL} };
export function completedTodos() { return {type: COMPLETED} };
export function activeTodos() { return {type: ACTIVE} };
