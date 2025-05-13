import { useState } from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="max-w-xl mx-auto mt-10 shadow-lg rounded-lg overflow-hidden bg-white">
      <h1 className="text-2xl font-bold text-center bg-blue-600 text-white py-4">Daily Planner</h1>
      <Calendar />
      <TaskForm editingTask={editingTask} clearEdit={() => setEditingTask(null)} />
      <TaskList onEdit={(task) => setEditingTask(task)} />
    </div>
  );
};

export default App;
