import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './components/Login';
import Register from './components/Register';
import CategoryList from './components/CategoryList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <div className='app-container'>
        <h1>Todo List App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <CategoryList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
