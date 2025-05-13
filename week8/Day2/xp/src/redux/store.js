import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducers';
import { todoReducer } from './reducers/todoReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
