import {GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE} from './types';
import fetch from 'isomorphic-unfetch'


//@DESC Get passages from endpoint
export const getPassages = () => async dispatch => {
  console.log('action hit');

  const res = await fetch('http://34.216.186.56/api/passages');
  const data = await res.json();

// console.log(data.data.passages)
  
  return dispatch({
    type: GET_PASSAGES,
    payload: data.data.passages
    })
}


// @DESC  Set loading to true
export  const setPassageLoading = () => {
  return {
    type: LOADING_PASSAGES
  }
}

// @DESC  Set current Passage
export  const setPassage = (id) => {
  return {
    type: SET_CURRENT_PASSAGE,
    payload: id
  }
}