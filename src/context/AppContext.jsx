import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    console.log("Dark mode:", dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <AppContext.Provider value={{ dark, setDark, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
