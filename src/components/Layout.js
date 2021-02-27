import React from 'react';
import '@ibm/plex';
import { Nav } from './Nav';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'IBM Plex Sans', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`;

export default function Layout({ children, props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props}>
      <GlobalStyles />
      <Nav />
      {children}
    </div>
  );
}
