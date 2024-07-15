import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="newTodo">Add your To-do items here! </label>
      <input
        type="text"
        id="newTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Have something to-do!?"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
