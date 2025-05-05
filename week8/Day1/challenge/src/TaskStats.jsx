import React from 'react';
import { useTasks } from './TaskContext';

const TaskStats = () => {
  const { state } = useTasks();
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter(task => task.completed).length;

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333' }}>
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      <p>Active tasks: {totalTasks - completedTasks}</p>
      <p>Current filter: {state.filter}</p>
    </div>
  );
};

export default TaskStats;