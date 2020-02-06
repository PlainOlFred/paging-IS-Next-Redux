// Actions
import { GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE} from '../actions/types'

const initialState= {
  passages: [],
  currentPassage: {},
  loading: false
}

export default (state = initialState, action) => {
  switch(action.types) {

    case GET_PASSAGES:
      return {
        ...state,
      passages: [...state.passages, action.payload],
      loading: false
      }
    
    case SET_CURRENT_PASSAGE:
      return {
        ...state,
        currentPassage: action.payload,

      }

    case LOADING_PASSAGES:
      return {
        ...state,
        loading: true
      }
      
    default:
      return state
  }
}