import uuidv4 from 'uuid/v4';

// Actions
const ADD_TODO = 'AtokanTodo/todos/ADD_TODO'
const TOGGLE_TODO = 'AtokanTodo/todos/TOGGLE_TODO'

const initialState = []

// Reducer
export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            id: uuidv4(),
            text: action.text,
            completed: false
          }
        ]
    case TOGGLE_TODO:
      const new_todos = state.map((todo) => {
        if (todo.id == action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })

      return new_todos
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
