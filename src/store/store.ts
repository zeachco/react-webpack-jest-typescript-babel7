import { createStore } from 'redux'

const defaultState = {
  todos: []
}

function todos(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat([action.text])
      }
    default:
      return state
  }
}

const store = createStore(todos)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())