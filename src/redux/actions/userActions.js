import axios from 'axios';
import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_PROFILE_SUCCESS } from './types';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/register', userData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/login', userData);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const getUserProfile = () => async (dispatch, getState) => {
  const token = getState().user.token;

  const config = {
    headers: {
      'x-auth-token': token
    }
  };

  try {
    const res = await axios.get('/api/users/profile', config);
    dispatch({ type: USER_PROFILE_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};
