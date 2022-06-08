import { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [current, setCurrent] = useState('/');
  return (
    <StateContext.Provider value={{ current, setCurrent }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
