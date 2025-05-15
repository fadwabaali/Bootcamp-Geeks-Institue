import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import { selectCompletedTasks } from './features/tasks/tasksSelectors';
import './App.css';
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('a');
  const completedCount = useSelector(selectCompletedTasks);

  return (
    <div className="app-container">
      <h1>Productivity Tracker</h1>
      <p>Completed Tasks: {completedCount}</p>
      <div className="select-wrapper">
        <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <TaskList selectedCategory={selectedCategory} />
    </div>

  );
};

export default App;
