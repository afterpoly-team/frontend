import React, {
  createContext,
  useContext,
  useDebugValue,
  useEffect,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext();

const useLanguage = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return { language, setLanguage };
};

const LanguageProvider = (props) => {
  localStorage.getItem("langSelect", "Rus");
  const [language, setLanguage] = useState(localStorage.getItem("langSelect"));

  useEffect(() => {
    setLanguage(localStorage.getItem("langSelect"));
  }, []);

  const value = useMemo(() => [language, setLanguage], [language]);

  return <LanguageContext.Provider value={value} {...props} />;
};

export { LanguageProvider, useLanguage };
