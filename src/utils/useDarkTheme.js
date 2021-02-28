import { useEffect, useState } from 'react';

const QUERY = '(prefers-color-scheme: dark)';

const isRenderingOnServer = typeof window === 'undefined';

function getInitialState() {
  const initialState = isRenderingOnServer
    ? true
    : window.matchMedia(QUERY).matches;
  return initialState;
}

export function usePrefersDarkTheme() {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(getInitialState);

  useEffect(() => {
    const html = document.querySelector('html');
    const theme = prefersDarkTheme ? 'theme-dark' : 'theme-light';

    console.log(`changing to theme ${theme}`);

    html.classList.remove(prefersDarkTheme ? 'theme-light' : 'theme-dark');
    html.classList.add(theme);
  }, [prefersDarkTheme]);

  function toggleDarkTheme() {
    setPrefersDarkTheme(!prefersDarkTheme);
  }

  return {
    prefersDarkTheme,
    setPrefersDarkTheme,
    toggleDarkTheme,
  };
}
