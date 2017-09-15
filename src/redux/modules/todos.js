import uuidv4 from 'uuid/v4';

// Actions
const ADD_TODO = 'AtokanTodo/todos/ADD_TODO'
const TOGGLE_TODO = 'AtokanTodo/todos/TOGGLE_TODO'

const initialState = {
  todos: []
}

// Reducer
export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            text: action.text,
            completed: false
          }
        ]})
    case TOGGLE_TODO:
      const new_todos = state.todos.map((todo) => {
        if (todo.id == action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })

      return Object.assign({}, state, {
        todos: new_todos,
      })
    default:
      return state
  }
}

// Action Creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}
