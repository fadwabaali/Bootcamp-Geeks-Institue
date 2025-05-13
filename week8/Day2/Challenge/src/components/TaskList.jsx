import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

const TaskList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { selectedDate, tasksByDate } = useSelector(state => state.tasks);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Tasks for {selectedDate}</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="flex justify-between items-center border-b py-2">
            <span>{task.title}</span>
            <div>
              <button onClick={() => onEdit(task)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))} className="text-red-500">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
