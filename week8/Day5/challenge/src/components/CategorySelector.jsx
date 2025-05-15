import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSelectors';

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
  const categories = useSelector(selectCategories);

  return (
    <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
