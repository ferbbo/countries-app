import React, { useState } from "react";

const themes = {
  dark: {
    background: "#202c37",
    colortext: "#ffffff",
    fontBackground: '#2b3945',
    loadingBackground: '#fafafa',
  },
  light: {
    background: "#ffffff",
    colortext: "#111517",
    fontBackground: '#fafafa',
    loadingBackground: '#2b3945',
  },  
};

const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const ToogleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToogleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
