import { User } from "@domain";
import React, { createContext, useState } from "react";

interface AppContextProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  dataUser: User;
  setDataUser: React.Dispatch<React.SetStateAction<User>>;
  key: string;
  setKey: React.Dispatch<React.SetStateAction<string>>;
}

type AppContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
  isLoggedIn: false,
  setLoggedIn: () => {},
  dataUser: {} as User,
  setDataUser: () => {},
  key: "",
  setKey: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [dataUser, setDataUser] = useState<User>({} as User);
  const [key, setKey] = useState("");

  const appContextValue: AppContextProps = {
    isLoggedIn,
    setLoggedIn,
    dataUser,
    setDataUser,
    key,
    setKey,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
