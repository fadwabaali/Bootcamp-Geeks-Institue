import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions/todoActions';
import TodoInput from './TodoInput';

const TodoList = ({ category }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.currentUser?.email);
  const todos = useSelector(state => state.todos.categories[userEmail]?.[category] || []);

  return (
    <div>
      <TodoInput category={category} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <div>
              <button onClick={() => dispatch(toggleTodo(userEmail, category, index))}>Toggle</button>
              <button onClick={() => dispatch(removeTodo(userEmail, category, index))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
