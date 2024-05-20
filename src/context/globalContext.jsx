'use client'
import { createContext, useState, useContext } from "react";




export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [organizacion, setOrg] = useState({});
  const [inventarios, setInv] = useState([{}]);
  const [currentinv, setCurrInv] = useState({});
  const [activeMenu, setActive] = useState("Inventarios");

  const resetSession = () => {
    setIsLogged(false);
    setUser({});
    setOrg({});
    setInv([{}]);
    setCurrInv({});
  };

    

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        organizacion,
        setOrg,
        inventarios,
        setInv,
        currentinv,
        setCurrInv,
        activeMenu,
        setActive,
        resetSession,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
