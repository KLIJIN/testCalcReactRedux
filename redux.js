const redux = require('redux')

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

  if (action.type === 'ADD') {
    return {
      counter: state.counter + 77
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 17
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.tytyryty
    }
  }

  return state
}

// Store
const store = redux.createStore(reducer)
console.log('0', store.getState())

store.subscribe(() => {
  console.log("Subscribe", store.getState() )   
})

// Actions
const addCounter = {
  type: 'ADD'
}

const addCounter2 = {
  type: 'ADD_NUMBER',
  tytyryty: 777
}

store.dispatch(addCounter)
console.log('1', store.getState())
store.dispatch({ type: 'SUB' })
console.log('2', store.getState())
store.dispatch(addCounter2)
console.log('2', store.getState())
