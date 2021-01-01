import React from 'react';
import { GlobalStyles } from 'twin.macro';

export default function Layout({ children, props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props}>
      <GlobalStyles />
      {children}
    </div>
  );
}
