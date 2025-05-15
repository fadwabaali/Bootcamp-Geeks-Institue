export const selectCategories = state => state.categories;

export const selectCategoryById = (id) =>
  (state) => state.categories.find(category => category.id === id);
