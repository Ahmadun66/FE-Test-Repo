import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_PROFILE_SUCCESS } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};

export default userReducer;
