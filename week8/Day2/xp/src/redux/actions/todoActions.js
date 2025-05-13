export const addTodo = (email, category, text) => ({
  type: 'ADD_TODO',
  payload: { email, category, text },
});

export const toggleTodo = (email, category, index) => ({
  type: 'TOGGLE_TODO',
  payload: { email, category, index },
});

export const removeTodo = (email, category, index) => ({
  type: 'REMOVE_TODO',
  payload: { email, category, index },
});

export const addCategory = (email, category) => ({
  type: 'ADD_CATEGORY',
  payload: { email, category },
});
