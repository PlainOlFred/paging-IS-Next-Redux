import {GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE, INCREMENT_PAGE, RESET_CURRENT_PAGE, SCROLL_PAGE, REMOVE_PASSAGES} from './types';
import fetch from 'isomorphic-unfetch';


//@DESC Get passages from endpoint
export const getPassages = (page) => async dispatch => {
  dispatch(setLoading());
  // console.log('action hit');

  const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
    // const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
  const data = await res.json();
 

  return await dispatch({
    type: GET_PASSAGES,
    payload: {
      data:data.data.passages,
      totalPages: data.data.pages}
    })

}

// @DESC  Get more pages from API endpoint
export  const scrollPage = (page)  => async dispatch  => {
  dispatch(setLoading());
  page +=1;
  const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
    // const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
  const data = await res.json();

  return await dispatch({
    type: SCROLL_PAGE,
    payload: data.data.passages
    })
}

// @DESC  Set lodading
export const setLoading = () => {
  return {
    type: LOADING_PASSAGES
  }
}

// @DESC  Remove paseeages
export const removePassages = () => {
  return {
    type: REMOVE_PASSAGES
  }
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



