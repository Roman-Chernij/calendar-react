import { useState, useEffect, useMemo } from 'react';

const useHttp = requestFunc => {
  const initialState = useMemo(() => (
    {
      data: null,
      loading: false,
      error: null
    }
  ), []);
  const [state, setstate] = useState(initialState);

  useEffect( () => {
    let canSaving = true;
    setstate(initialState);
    requestFunc()
      .then(result => {
        if (!canSaving) return;
        setstate({
          data: result,
          loading: true,
          error: null
        })
      })
      .catch(error => {
        if (!canSaving) return;
        setstate({
          data: null,
          loading: true,
          error
        })
      });
    return () => canSaving = false;
  }, [requestFunc, initialState]);

  return ({...state})
};

export default useHttp;
