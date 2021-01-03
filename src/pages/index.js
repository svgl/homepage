import React from 'react';
import styled from 'styled-components';
import { Nav } from '../components/Nav';
import 'twin.macro';

const BoxStyles = styled.div`
  height: 800px;
`;

export default function Index() {
  return (
    <>
      <Nav />
      <main>
        <p>Welcome</p>
        <BoxStyles>
          <p>stuff</p>
        </BoxStyles>
      </main>
    </>
  );
}
