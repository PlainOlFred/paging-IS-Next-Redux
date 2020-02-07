import {GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE, INCREMENT_PAGE, RESET_CURRENT_PAGE} from './types';
import fetch from 'isomorphic-unfetch';


//@DESC Get passages from endpoint
export const getPassages = (page) => async dispatch => {
  // console.log('action hit');

  const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
  const data = await res.json();
  // console.log(data.data.passages)

  return await dispatch({
    type: GET_PASSAGES,
    payload: {
      data:data.data.passages,
      totalPages: data.data.pages}
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

// @DESC  Icrement page on scoll
export  const incrementPage = () => {
  return {
    type: INCREMENT_PAGE
    
  }
}

// @DESC  reset current page
export  const resetCurrentPage = () => {
  return {
    type: RESET_CURRENT_PAGE
    
  }
}

