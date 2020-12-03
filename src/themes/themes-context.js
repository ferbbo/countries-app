import React from "react";
export const themes = {
  dark: {
    background: "#202c37",
    colortext: "#ffffff",
    fontBackground: '#2b3945'
  },
  light: {
    background: "#ffffff",
    colortext: "#111517",
    fontBackground: '#fafafa'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  ToogleTheme: () => {},
});
