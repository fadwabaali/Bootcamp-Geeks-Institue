import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ editingTask, clearEdit }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);
  const [title, setTitle] = useState(editingTask?.title || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      dispatch(editTask({
        date: selectedDate,
        taskId: editingTask.id,
        updatedTask: { title }
      }));
      clearEdit();
    } else {
      dispatch(addTask({
        date: selectedDate,
        task: { id: uuidv4(), title }
      }));
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={title}
        placeholder="Enter task"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
