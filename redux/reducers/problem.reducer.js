// Actions
import { GET_PROBLEMS, REMOVE_PROBLEMS, LOADING_PROBLEMS, SET_CURRENT_PROBLEM
  
  } from '../actions/types'

// Initial State
const initialState= {
  problems: [],
  currentPage: 0,
  totalPages: null,
  isScrolling: false,
  isLoading: false,

  currentProblem: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_PROBLEMS:
      return {
        ...state,
        problems: [...state.problems, ...action.payload.data],
        totalPages: action.payload.totalPages,
        isLoading: false,
        isScrolling: false,
        currentPage: state.currentPage + 1
      }
    
    case REMOVE_PROBLEMS:
      return {
        ...state,
        problems: [],
        currentPage: 0,

      }

    case SET_CURRENT_PROBLEM:
      return {
        ...state,
        currentProblem: state.problems.filter(problem => problem.id === action.payload)[0]

      }

    case LOADING_PROBLEMS:
      return {
        ...state,
        isLoading: true,
        isScrolling: true
      }

    default:
      return state
  }
}