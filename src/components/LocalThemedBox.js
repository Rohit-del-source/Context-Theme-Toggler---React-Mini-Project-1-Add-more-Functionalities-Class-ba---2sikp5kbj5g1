import React from 'react';
import { withTheme } from './ThemeProvider';

const LocalThemedBox = ({ theme }) => {
  return (
    <div style={{ width: '200px', height: '200px', border: '2px solid green' }} className={`bg-${theme}`} id="local-themed-box">
      {/* Write code below this line */}
      <p className={`txt-${theme === 'light' ? 'light' : 'dark'}`} id="local-themed-text-container">
        Some Text
      </p>
    </div>
  );
};

export default withTheme(LocalThemedBox);
