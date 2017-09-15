// Actions
const ADD_TODO = 'AtokanTodo/todos/ADD_TODO'

// Reducer
export default function reducer (state = {todos: []}, action) {
  switch(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            // id: action.id,
            text: action.text,
          // completed: false
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
