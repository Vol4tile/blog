import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Tarayıcının dark mode destekliyorsa veya kullanıcı tercih yapmamışsa varsayılan olarak tarayıcı ayarını kullan
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialDarkMode =
    JSON.parse(localStorage.getItem("darkMode")) ?? prefersDarkMode;
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Tema değişikliklerini localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
