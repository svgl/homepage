import React from 'react';
import styled from 'styled-components';

const BoxStyles = styled.div`
  height: 800px;
`;

export default function Index() {
  return (
    <>
      <main>
        <p>Welcome</p>
        <BoxStyles>
          <p>stuff</p>
        </BoxStyles>
      </main>
    </>
  );
}
