import React from 'react';
import { GlobalStyles } from 'twin.macro';
import '@ibm/plex';

export default function Layout({ children, props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props} tw="font-sans text-gray-900 antialiased">
      <GlobalStyles />
      {children}
    </div>
  );
}
