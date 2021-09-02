import { useEffect, useState, createContext, useContext } from "react";

export const ScrollContext = createContext();

export const Scroll = () => {
  const [scrolled] = useContext(ScrollContext);
  return { scrolled };
};

export const ScrollProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);
  }, []);

  const getScrollPosition = () => {
    const documentScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrolled(documentScroll);
  };

  return (
    <ScrollContext.Provider value={[scrolled, setScrolled]}>
      {children}
    </ScrollContext.Provider>
  );
};
