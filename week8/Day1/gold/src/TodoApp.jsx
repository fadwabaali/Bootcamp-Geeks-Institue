import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuidv4(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a todo..."
        style={{ padding: '0.5rem', width: '80%' }}
      />
      <button onClick={handleAddTodo} style={{ marginLeft: '0.5rem' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
            {todo.text}
            <button
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
              style={{ marginLeft: '1rem' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
