import { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext({ theme: 'light' });

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('needs a provider');
  }
  return context;
};
