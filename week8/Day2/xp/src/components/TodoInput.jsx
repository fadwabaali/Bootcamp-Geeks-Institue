import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const TodoInput = ({ category }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.currentUser?.email);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (text.trim()) {
        dispatch(addTodo(userEmail, category, text));
        setText('');
      }
    }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
