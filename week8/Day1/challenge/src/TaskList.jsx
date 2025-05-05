import React, { useState, useRef } from 'react';
import { useTasks } from './TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTasks();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const editInputRef = useRef(null);

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  const handleEditClick = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setTimeout(() => {
      editInputRef.current?.focus();
    }, 0);
  };

  const handleEditSubmit = (id) => {
    if (editText.trim()) {
      dispatch({ type: 'EDIT_TASK', payload: { id, text: editText } });
      setEditingId(null);
      setEditText('');
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      handleEditSubmit(id);
    } else if (e.key === 'Escape') {
      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          style={{ marginRight: '10px' }}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          style={{ marginRight: '10px' }}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
        >
          Completed
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.map(task => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f5f5f5',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : '#333'
            }}
          >
            {editingId === task.id ? (
              <input
                type="text"
                ref={editInputRef}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleEditSubmit(task.id)}
                onKeyDown={(e) => handleKeyDown(e, task.id)}
                style={{ flexGrow: 1, padding: '5px' }}
              />
            ) : (
              <span 
                onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                style={{ flexGrow: 1, cursor: 'pointer' }}
              >
                {task.text}
              </span>
            )}
            
            <div>
              <button
                onClick={() => handleEditClick(task)}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  marginRight: '5px'
                }}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                style={{
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;