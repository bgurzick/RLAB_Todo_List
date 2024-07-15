import React, { useReducer, useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const initialState = {
  todos: [],
  editingId: null,
  editText: '',
};

function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [{ id: action.payload.id, text: action.payload.text, completed: false }, ...state.todos],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'START_EDIT':
      return {
        ...state,
        editingId: action.payload.id,
        editText: action.payload.text,
      };
    case 'SAVE_EDIT':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === state.editingId ? { ...todo, text: state.editText } : todo
        ),
        editingId: null,
        editText: '',
      };
    case 'CANCEL_EDIT':
      return {
        ...state,
        editingId: null,
        editText: '',
      };
    default:
      return state;
  }
};

function App () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const showDate = now.toLocaleDateString();
    setCurrentDate(showDate);
  }, []);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text } });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const startEdit = (id, text) => {
    dispatch({ type: 'START_EDIT', payload: { id, text } });
  };

  const saveEdit = (text) => {
    dispatch({ type: 'SAVE_EDIT', payload: { text } });
  };

  const cancelEdit = () => {
    dispatch({ type: 'CANCEL_EDIT' });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  return (
    <div className="container">
      <h1>Okay! To-do List! </h1>
      <h2>Today is: {currentDate}</h2>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={state.todos}
        toggleTodo={toggleTodo}
        startEdit={startEdit}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
        deleteTodo={deleteTodo}
        editingId={state.editingId}
        editText={state.editText}
      />
    </div>
  );
};

export default App;