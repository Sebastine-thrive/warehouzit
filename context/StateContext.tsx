"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface StateContextValue {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  login: boolean;
  signup: boolean;
  greet: boolean;
  setGreet: React.Dispatch<React.SetStateAction<boolean>>;
  loginOrSignupButtonHandler: () => void;
  cancelGreeting: () => void;
}
const Context = createContext<StateContextValue | null>(null);

interface StateContextProps {
  children: ReactNode;
}

export const StateContext: React.FC<StateContextProps> = ({ children }) => {
  const [role, setRole] = useState<string>("spaceseeker");
  const [login, setLogin] = useState<boolean>(false);
  const [signup, setSignUp] = useState<boolean>(true);
  const [greet, setGreet] = useState<boolean>(true);

  const loginOrSignupButtonHandler: () => void = () => {
    setLogin((login) => !login);
    setSignUp((signup) => !signup);
  };

  const cancelGreeting: () => void = () => {
    setGreet(false);
  };

  const contextValue: StateContextValue = {
    login,
    signup,
    role,
    setRole,
    greet,
    setGreet,
    cancelGreeting,
    loginOrSignupButtonHandler,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export const useStateContext = () => useContext(Context);
