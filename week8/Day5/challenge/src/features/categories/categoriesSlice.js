import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'a', name: 'Work' },
  { id: 'b', name: 'Personal' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: {
      reducer: (state, action) => void state.push(action.payload),
      prepare: (name) => ({
        payload: {
          id: nanoid(),
          name,
        },
      }),
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const category = state.find(c => c.id === id);
      if (category) category.name = name;
    },
    deleteCategory: (state, action) => {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
