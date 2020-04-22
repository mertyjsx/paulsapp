// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';

import { GET_ERRORS, CLEAR_ERRORS } from '../actions/action-types/error-actions';

const initialState = {
  msg: {},
  status: null,
  id: null
}

export default function(state = initialState, action){
  switch(action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
}

// export const initStore = (initialState = initState) => {
//   return createStore(
//       errorReducer,
//       initialState,
//       composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }