// App.js
import React, { useState } from 'react'; 
import useDetectBrowser from './Hooks/useDetectBrowser';
import useTodos from './Hooks/useTodos';

function App() {
  const [text, setText] = useState('');
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearTodos
  } = useTodos();
  const browser = useDetectBrowser();

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h1> Todo App</h1>
      <p> Browser detected: <strong>{browser}</strong></p>

      <input
        type="text"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button onClick={clearTodos} style={{ marginTop: '1rem' }}>
          Clear All Todos
        </button>
      )}
    </div>
  );
}

export default App;
