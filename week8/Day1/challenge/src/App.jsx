// src/App.js
import React from 'react';
import { TaskProvider } from './TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

const App = () => {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Enhanced Task Manager</h1>
        <AddTask />
        <TaskList />
        <TaskStats />
      </div>
    </TaskProvider>
  );
};

export default App;