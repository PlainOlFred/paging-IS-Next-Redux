// Actions
import { GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE} from '../actions/types'

// Initial State
const initialState= {
  passages: [],
}

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_PASSAGES:
      console.log('i am in the reducer')
      return {
        ...state,
        passages: [...state.passages, ...action.payload],
      }
 
    default:
      return state
  }
}