import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const withTheme = (WrappedComponent) => {
  return (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return <WrappedComponent {...props} theme={theme} toggleTheme={toggleTheme} />;
  };
};

export { ThemeProvider, ThemeContext, withTheme };
