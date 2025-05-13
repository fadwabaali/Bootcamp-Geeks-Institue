import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../redux/tasksSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  return (
    <div className="p-4">
      <label className="text-sm font-medium">Choose a day:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => dispatch(setDate(e.target.value))}
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
  );
};

export default Calendar;
