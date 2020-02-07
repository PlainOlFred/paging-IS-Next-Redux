import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from './reducers';
// Middleware to be Applied
const middleware = [thunk];


// InitialStore
export const initializeStore  = (intialState = {}) => {
  return createStore(rootReducer, intialState, composeWithDevTools(
  applyMiddleware(...middleware)
));

} 


