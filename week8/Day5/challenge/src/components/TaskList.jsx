import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editTask,
  toggleComplete,
  deleteTask
} from '../features/tasks/tasksSlice';
import { selectTasksByCategory } from '../features/tasks/tasksSelectors';

const TaskList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksByCategory(selectedCategory));

  const handleToggle = useCallback((id) => {
    dispatch(toggleComplete(id));
  }, [dispatch]);

  const handleEdit = useCallback((id) => {
    const newTitle = prompt('New task title:');
    if (newTitle) dispatch(editTask({ id, title: newTitle }));
  }, [dispatch]);

  return (
    <ul>
  {tasks.map(task => (
    <li key={task.id}>
      <div className="task-info">
        <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
      </div>
      <div>
        <button onClick={() => handleEdit(task.id)}>✏️</button>
        <button onClick={() => dispatch(deleteTask(task.id))}>🗑️</button>
      </div>
    </li>
  ))}
</ul>

  );
};

export default TaskList;
