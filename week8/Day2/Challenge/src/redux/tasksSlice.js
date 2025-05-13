import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: new Date().toISOString().split('T')[0], 
  tasksByDate: {},
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
    addTask(state, action) {
      const { date, task } = action.payload;
      state.tasksByDate[date] = [...(state.tasksByDate[date] || []), task];
    },
    editTask(state, action) {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date] || [];
      state.tasksByDate[date] = tasks.map(task =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
    },
    deleteTask(state, action) {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(task => task.id !== taskId);
    },
  },
});

export const { setDate, addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
