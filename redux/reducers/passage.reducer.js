// Actions
import { GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE, INCREMENT_PAGE, RESET_CURRENT_PAGE, REMOVE_PASSAGES,SCROLL_PAGE} from '../actions/types'

// Initial State
const initialState= {
  passages: [],
  totalPages: null,
  currentPage: 0,
  isScrolling: false,
  currentPassage_id: 0,
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_PASSAGES:
      // console.log('i am in the reducer')
      return {
        ...state,
        passages: [...action.payload.data],
        totalPages: action.payload.totalPages,
        isLoading: false
      }
    
    case REMOVE_PASSAGES:
      return {
        ...state,
        passages: [],
        currentPage: 0,

      }

    case SCROLL_PAGE:
      return {
        ...state,
        passages: [...state.passages, ...action.payload],
        currentPage: state.currentPage < state.totalPages ? state.currentPage + 1 : state.totalPages,
        isLoading: false

      }
    case SET_CURRENT_PASSAGE:
      return {
        ...state,
        currentPassage_id: action.payload
      }

    case INCREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage < state.totalPages ? state.currentPage + 1 : state.totalPages
      }
    case RESET_CURRENT_PAGE:
      return { 
        ...state,
        currentPage: 0
      }

    case LOADING_PASSAGES:
      return {
        ...state,
        isLoading: true
      }

 
    default:
      return state
  }
}