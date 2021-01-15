import React from 'react';

function useTheme() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const [currentTheme, setCurrentTheme] = React.useState(localStorage.theme);

  function loadTheme() {
    if (localStorage.theme === 'dark') {
      setCurrentTheme('dark');
      document.querySelector('html').classList.add('dark');
    } else if (
      localStorage.theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setCurrentTheme('system');
      document.querySelector('html').classList.add('dark');
    } else if (
      localStorage.theme === 'system' &&
      !window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setCurrentTheme('system');
      document.querySelector('html').classList.remove('dark');
    } else {
      setCurrentTheme('light');
      document.querySelector('html').classList.remove('dark');
    }
  }

  // Whenever the user explicitly chooses light mode
  function useLightTheme() {
    localStorage.theme = 'light';
    loadTheme();
  }

  // Whenever the user explicitly chooses dark mode
  function useDarkTheme() {
    localStorage.theme = 'dark';
    loadTheme();
  }

  // Whenever the user explicitly chooses to respect the OS preference
  function useSystemTheme() {
    localStorage.theme = 'system';
    loadTheme();
  }

  return {
    loadTheme,
    useSystemTheme,
    useDarkTheme,
    useLightTheme,
    currentTheme
  };
}

export default useTheme;
