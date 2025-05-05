import React from 'react';
import { useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

function ThemedContent() {
  const { theme } = useTheme();

  const styles = {
    height: '100vh',
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
    color: theme === 'light' ? '#333' : '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={styles}>
      <ThemeSwitcher />
      <h1>Hello, {theme} mode!</h1>
    </div>
  );
}

export default ThemedContent;