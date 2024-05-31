
import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_PROFILE_SUCCESS, ERROR} from './types';
import axiosBase from '../../api/axiosBase';



export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axiosBase.post('/users/register', userData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    return { success: true, data: res.data }; // Return success response
  } catch (err) {
     dispatch({ type: ERROR, payload: err.response.data.msg });
     return { success: false, error: err.response.data.msg }; // Return error response
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axiosBase.post('/users/login', userData);
    console.log(res)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    return { success: true, data: res.data }; // Return success response
  } catch (err) {
    console.log(err)
    return { success: false, error: err.response.data.msg }; // Return error response
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
    const res = await axiosBase.get('/users/profile', config);    
    dispatch({ type: USER_PROFILE_SUCCESS, payload: res.data });

  } catch (err) {

    dispatch({ type: ERROR, payload: err.response.data.msg});
    
  }
};
