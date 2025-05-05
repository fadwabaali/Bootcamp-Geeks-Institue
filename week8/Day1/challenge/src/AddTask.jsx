import React, { useState } from 'react';
import { useTasks } from './TaskContext';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTasks();

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;