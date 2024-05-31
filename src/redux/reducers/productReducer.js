import { ADD_PRODUCT_SUCCESS, GET_LIST_PRODUCT_SUCCESS, ERROR, GET_ONE_PRODUCT, DELETE_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT} from '../actions/types';

const initialState = {
  products: [],
  productsUpdate: [],
  product: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, payload],
        error: null,
      };
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        error: null,
      };

    case GET_ONE_PRODUCT:
      return {
        ...state,
        product: payload,
        error: null,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        productsUpdate: payload,
        error: null,
      };

    case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          error: null,
        };
    case ERROR: 
      return {
        ...state, 
        error: payload
      }
    default:
      return state;
  }
};

export default productReducer;
