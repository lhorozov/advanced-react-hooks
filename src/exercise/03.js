// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = props => {
  const [count, setCount] = React.useState(props.value)
  const value = [count, setCount]

  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const context = React.useContext(CountContext)
  if (!context)
    throw new Error(
      'Cannot use CountContext without CountProvider. Please add it...',
    )

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/* <CountProvider value={0}> */}
      <CountDisplay />
      <Counter />
      {/* </CountProvider> */}
    </div>
  )
}

export default App
