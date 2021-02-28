import { useEffect, useState } from 'react';

export function useDarkTheme() {
  const QUERY = '(prefers-color-scheme: dark)';
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(
    window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const html = document.querySelector('html');
    const theme = prefersDarkTheme ? 'theme-dark' : 'theme-light';

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
