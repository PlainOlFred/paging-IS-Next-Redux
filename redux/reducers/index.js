import { combineReducers } from 'redux';

// Reducers
import passageReducer from './passage.reducer'
import testReducer from './test.reducer'

export default combineReducers({
  passage: passageReducer
  // test: testReducer

})
