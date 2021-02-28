import React from 'react';
import styled from 'styled-components';
import { useDarkTheme } from '../utils/useDarkTheme';

const IndexStyles = styled.main`
  max-width: 70ch;
  width: 100%;
  margin: 0 auto;
  font-size: 1.1rem;

  h1 {
    margin: 1rem 0;
  }
`;

export default function IndexPage() {
  const { toggleDarkTheme } = useDarkTheme();
  return (
    <IndexStyles>
      <h1>Welcome! I am Seth Vergeyle</h1>
      <button type="button" onClick={() => toggleDarkTheme()}>
        Change theme!
      </button>
    </IndexStyles>
  );
}
