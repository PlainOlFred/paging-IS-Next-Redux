import { combineReducers } from 'redux';

// Reducers
import passageReducer from './passage.reducer'

export default combineReducers({
  passage: passageReducer
})
