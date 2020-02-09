import {useEffect} from 'react';

const useEvent = (event, handler, capturing = false) => {
  useEffect(() => {

    window.addEventListener(event, handler, capturing);

    return () => window.removeEventListener(event, handler);
  })
} 

export default useEvent;
