import { ADD_PRODUCT_SUCCESS, GET_LIST_PRODUCT_SUCCESS, GET_ONE_PRODUCT, ERROR, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from '../actions/types';
import axiosBase from '../../api/axiosBase';


export const addProduct = (userData, navigate) => async (dispatch) => {
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  };
  try {
    const res = await axiosBase.post('/products/addproduct', userData, config);
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
    return { success: true };
  } catch (err) {
    dispatch({ type: ERROR, payload: err?.response });
  }
};

export const getListProduct = () => async (dispatch) => {
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  };
  try {
    const res = await axiosBase.get('/products/listproduct', config);
    dispatch({ type: GET_LIST_PRODUCT_SUCCESS, payload: res.data });
    return { success: true }; // Return success response
  } catch (err) {
    dispatch({ type: ERROR, payload: err?.response });
    return { success: false }; // Return error response
  }
};
export const getOneProduct = (id) => async (dispatch) => {
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  };
  try {
    const res = await axiosBase.get(`/products/oneproduct/${id}`, config);
    dispatch({ type: GET_ONE_PRODUCT, payload: res.data });
    return { success: true }; // Return success response
  } catch (err) {
    dispatch({ type: ERROR, payload: err?.response });
    return { success: false }; // Return error response
  }
};


export const updateProduct = (data, id) => async (dispatch) => {
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  };
  try {
    const res = await axiosBase.put(`/products/updateproduct/${id}`,data , config);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data });
    return { success: true }; // Return success response
  } catch (err) {
    dispatch({ type: ERROR, payload: err?.response });
    return { success: false }; // Return error response
  }
};


export const deleteproduct = (id) => async (dispatch) => {
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  };
  try {
    const res = await axiosBase.delete(`/products/deleteproduct/${id}`, config);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res.data });
    return { success: true }; // Return success response
  } catch (err) {
    dispatch({ type: ERROR, payload: err?.response });
    return { success: false }; // Return error response
  }
};