import { combineReducers } from 'redux';

// Reducers
import passageReducer from './passage.reducer'
import problemReducer from './problem.reducer'

export default combineReducers({
  passage: passageReducer,
  problem: problemReducer
})
