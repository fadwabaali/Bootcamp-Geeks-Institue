import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
