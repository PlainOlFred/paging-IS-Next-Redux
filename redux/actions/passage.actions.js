import {GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE, REMOVE_PASSAGES} from './types';
import fetch from 'isomorphic-unfetch';


//@DESC Get passages from endpoint
export const getPassages = (page) => async dispatch => {
  await dispatch(setLoading());
  // console.log('action hit');
  const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
    // const res = await fetch(`http://34.216.186.56/api/passages?page=${page}`);
  const data = await res.json();
  // await dispatch(incrementPage());
 
  return await dispatch({
    type: GET_PASSAGES,
    payload: {
      data:data.data.passages,
      totalPages: data.data.pages}
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