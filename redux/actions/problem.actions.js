import {GET_PROBLEMS, REMOVE_PROBLEMS, LOADING_PROBLEMS, SET_CURRENT_PROBLEM} from './types';
import fetch from 'isomorphic-unfetch';


//@DESC Get problems from endpoint
export const getProblems = (page) => async dispatch => {
  await dispatch(setLoading());
  // console.log('action hit');
  const res = await fetch(`http://34.216.186.56/api/problems?page=${page}`);
  const data = await res.json();
 
  return await dispatch({
    type: GET_PROBLEMS,
    payload: {
      data:data.data.problems,
      totalPages: data.data.pages}
    })

}

// @DESC  Set lodading
export const setLoading = () => {
  return {
    type: LOADING_PROBLEMS
  }
}

// @DESC Set current Problem
export  const setProblem = (id) => {
  console.log('setting problem')
  return {
    type: SET_CURRENT_PROBLEM,
    payload: id
  }
}

// @DESC  Remove problems
export const removeProblems = () => {
  return {
    type: REMOVE_PROBLEMS
  }
}



