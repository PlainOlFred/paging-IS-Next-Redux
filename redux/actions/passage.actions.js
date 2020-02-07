import {GET_PASSAGES, LOADING_PASSAGES, SET_CURRENT_PASSAGE} from './types';
import fetch from 'isomorphic-unfetch'

export const getPassages = () => async dispatch => {
  dispatch(setPassageLoading);
  console.log('action hit');

  const res = await fetch('http://34.216.186.56/api/passages');
  const data = await res.json();

  console.log(data.data.passages)

  dispatch({
    type: GET_PASSAGES,
    payload: data.data.passages
  })

}

export  const setPassageLoading = () => {
  return {
    type: LOADING_PASSAGES
  }
}