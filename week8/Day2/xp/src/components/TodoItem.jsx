import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {todo.text}
      <div>
        <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
