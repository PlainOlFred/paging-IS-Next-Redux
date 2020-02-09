// Actions
import { 
  GET_PASSAGES, LOADING_PASSAGES, REMOVE_PASSAGES,  
  SET_CURRENT_PASSAGE
  } from '../actions/types'

// Initial State
const initialState= {
  passages: [],
  currentPage: 0,
  totalPages: null,
  isScrolling: false,
  isLoading: false,

  currentPassage: {}

}

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_PASSAGES:
      // console.log('i am in the reducer')
      return {
        ...state,
        passages: [...state.passages, ...action.payload.data],
        totalPages: action.payload.totalPages,
        isLoading: false,
        isScrolling: false,
        currentPage: state.currentPage + 1
      }
    
    case REMOVE_PASSAGES:
      return {
        ...state,
        passages: [],
        currentPage: 0,

      }

    case SET_CURRENT_PASSAGE:
      return {
        ...state,
        currentPassage: state.passages.filter(passage => passage.id === action.payload)[0]
      }

    
   
    case LOADING_PASSAGES:
      return {
        ...state,
        isLoading: true,
        isScrolling: true
      }


    default:
      return state
  }
}