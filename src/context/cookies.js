import { useState, createContext, useContext } from "react";

export const CookiesContext = createContext();

export const CheckCookies = () => {
  const [checkCookies] = useContext(CookiesContext);
  return checkCookies;
};

export const SetCookies = () => {
  const [, setCookies] = useContext(CookiesContext);
  return setCookies;
};

export const CookiesProvider = ({ children }) => {
  const [hasCookiesSet, setHasCookiesSet] = useState(
    localStorage.getItem("cookies")
  );

  return (
    <CookiesContext.Provider value={[hasCookiesSet, setHasCookiesSet]}>
      {children}
    </CookiesContext.Provider>
  );
};
