import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/actions/todoActions';
import TodoList from './TodoList';

const CategoryList = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.currentUser?.email);
  const userCategories = useSelector(state =>
    state.todos.categories[userEmail] ? Object.keys(state.todos.categories[userEmail]) : []
  );

  return (
    <div>
      <h2>Categories</h2>
      <form onSubmit={e => {
        e.preventDefault();
        if (category.trim()) {
          dispatch(addCategory(userEmail, category));
          setCategory('');
        }
      }}>
        <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Add category" />
        <button type="submit">Add</button>
      </form>

      {userCategories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <TodoList category={cat} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
