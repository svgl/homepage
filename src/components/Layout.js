import React from 'react';
import '@ibm/plex';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Nav } from './Nav';

const GlobalStyles = createGlobalStyle`
  :root {
    --darkGray: #282a36;
    --lightGray: #f8f8f2;
    --orange: #ffb86c;
    --purple: #bd93f9;
  }

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

  html,
  body {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;

    color: var(--text-color);
    background-color: var(--bg-color);

    transition: color 350ms ease 0s, background 350ms ease 0s;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: inherit;
    color: inherit;
    border: none;
    padding: 0;
    border-radius: 2px;
    cursor: pointer;
  }

  mark, .mark {
    background-color: var(--accent-color);
    padding: 0 2px 2px;
    color: var(--text-color);
    transition: color 350ms ease 0s, background 350ms ease 0s;
  }
`;

const LayoutStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default function Layout({ children, props }) {
  return (
    <>
      <Helmet attitleTemple="%s - Seth Vergeyle" defaultTitle="Welcome">
        <html lang="en-US" />
      </Helmet>
      <GlobalStyles />
      <LayoutStyles {...props}>
        <Nav />
        <div>{children}</div>
      </LayoutStyles>
    </>
  );
}
