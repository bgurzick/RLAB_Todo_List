import React from 'react';

const TodoList = ({ todos, toggleTodo, startEdit, saveEdit, cancelEdit, deleteTodo, editingId, editText }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          {todo.id === editingId ? (
            <>
              <input type="text" value={editText} onChange={(e) => saveEdit(e.target.value)} />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
              <button onClick={() => cancelEdit()}>Cancel</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)} disabled={!todo.completed}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
