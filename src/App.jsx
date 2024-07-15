import { useState, useReducer } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>To-Do List</h1>
        <h2>Today is <span id='currentDate'></span></h2>
      {/* state and toggle and actions  */}
    </div>
    </>
  )
}

export default App
