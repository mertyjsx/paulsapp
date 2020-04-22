import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  error: errorReducer
});
