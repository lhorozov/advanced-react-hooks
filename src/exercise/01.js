// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, newState) => {
    return typeof newState === 'function' ? newState(state) : newState
  }
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
