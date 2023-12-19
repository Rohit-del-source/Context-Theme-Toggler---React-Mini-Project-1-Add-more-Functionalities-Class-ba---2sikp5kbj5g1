import React from 'react';
import { withTheme } from './ThemeProvider';

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button className={`btn ${theme === 'light' ? 'txt-light' : 'txt-dark'}`} id="global-theme-toggler" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
  );
};

export default withTheme(ThemeToggleButton);
