import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

// const initialState = {};

// const middleWare = [thunk];

// let composeEnhancers;
// if (typeof window !== 'undefined')
// {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

// const composeEnhancers = compose;

// const initStore = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleWare))
// );

// export default initStore;

export const initStore = (initialState = {}) => {
  return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
  )
};