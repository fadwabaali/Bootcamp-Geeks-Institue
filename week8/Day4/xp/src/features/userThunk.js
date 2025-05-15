import axios from 'axios';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from './userSlice';

export const fetchUserData = () => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
