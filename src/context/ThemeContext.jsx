//1st step
import { useState } from 'react';
import { createContext } from 'react';

//2nd call the function and create a context
export const ThemeContext = createContext();

//3 create a provider components which shares the data to the App

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


