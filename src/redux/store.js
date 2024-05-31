import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

// Mendefinisikan rootReducer dengan combineReducers
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
});

// Membuat store dengan rootReducer dan middleware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
