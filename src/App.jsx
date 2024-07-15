import React from 'react'
import { useState, useReducer } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'


function App() {
  const [state, dispatch] = useReducer(reducer, )

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
