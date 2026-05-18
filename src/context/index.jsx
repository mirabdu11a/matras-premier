import { createContext, useState, useContext } from "react";
import { MATRAS_PREMIER, LANGUANGE } from "../locale";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUANGE);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem(MATRAS_PREMIER, newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
