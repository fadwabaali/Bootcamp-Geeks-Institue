import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Finish React project', categoryId: 'a', completed: false },
  { id: '2', title: 'Write blog post', categoryId: 'b', completed: true },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => void state.push(action.payload),
      prepare: (title, categoryId) => ({
        payload: {
          id: nanoid(),
          title,
          categoryId,
          completed: false,
        },
      }),
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.title = title;
    },
    toggleComplete: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, editTask, toggleComplete, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
