import React from 'react';
import '@ibm/plex';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Nav } from './Nav';

const GlobalStyles = createGlobalStyle`
  :root {
    --darkGray: #282a36;
    --lightGray: #f8f8f2;
    --orange: #ffb86c;
    --purple: #bd93f9;
  }

  .theme-default,
  .theme-light {
    --text-color: var(--darkGray);
    --bg-color: var(--lightGray);
    --accent-color: var(--orange);
  }

  .theme-dark {
    --text-color: var(--lightGray);
    --bg-color: var(--darkGray);
    --accent-color: var(--purple);
  }

  @media (prefers-color-scheme: dark) {
    .theme-default {
      --text-color: var(--lightGray);
      --bg-color: var(--darkGray);
      --accent-color: var(--purple);
    }
  }

  html,
  body {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;

    color: var(--text-color);
    background-color: var(--bg-color);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  mark, .mark {
    background-color: var(--accent-color);
    padding: 0 2px 2px;
  }
`;

export default function Layout({ children, props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props}>
      <Helmet>
        <html lang="en-US" className="theme-default" />
      </Helmet>
      <GlobalStyles />
      <Nav />
      {children}
    </div>
  );
}
