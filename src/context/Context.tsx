import React from 'react';
import {ReactNode, createContext, useState, useContext} from 'react';

export interface ContextType {
  isInternetConnected: boolean;

  updateIsInternetConnected: (
    value: ContextType['isInternetConnected'],
  ) => void;
}
const initialContextValue: ContextType = {
  isInternetConnected: false,
  updateIsInternetConnected: () => {},
};

const userContext = createContext<ContextType>(initialContextValue);
export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [isInternetConnected, setIsInternetConnected] = useState<
    ContextType['isInternetConnected']
  >(initialContextValue.isInternetConnected);

  const updateIsInternetConnected = (
    state: ContextType['isInternetConnected'],
  ) => {
    setIsInternetConnected(state);
  };

  return (
    <userContext.Provider
      value={{
        isInternetConnected,
        updateIsInternetConnected,
      }}>
      {children}
    </userContext.Provider>
  );
};
export const UserContext = () => {
  const context = useContext(userContext);
  return context;
};
