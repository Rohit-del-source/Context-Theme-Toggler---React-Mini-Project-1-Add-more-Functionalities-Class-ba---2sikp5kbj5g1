import React from 'react';
import { withTheme } from './ThemeProvider';
import { LocalThemedBox } from './LocalThemedBox';

const Page = ({ theme }) => {
  return (
    <div className={`container bg-${theme}`} id="themed-page">
      <p className={`txt-${theme === 'light' ? 'light' : 'dark'}`} id="themed-text-container">
        Lorem ipsum dolor iterit n stuff
      </p>
      <button className={`btn ${theme === 'light' ? 'txt-light' : 'txt-dark'}`} id="themed-button">
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export default withTheme(Page);
