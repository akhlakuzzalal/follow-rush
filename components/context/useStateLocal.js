import { useContext } from 'react';
import { StateContext } from './stateContext';

const useStateLocal = () => {
  return useContext(StateContext);
};

export default useStateLocal;
