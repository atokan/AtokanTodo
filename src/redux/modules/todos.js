import uuidv4 from 'uuid/v4';

// Actions
const ADD_TODO = 'AtokanTodo/todos/ADD_TODO'

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
