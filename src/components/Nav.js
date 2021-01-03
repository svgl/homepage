import React from 'react';
import tw from 'twin.macro';
import { useIsScrolled } from '../utils/useIsScrolled';
import { Logo } from './Logo';

export function Nav() {
  const { isScrolled } = useIsScrolled();

  return (
    <nav tw="py-4 w-full fixed bg-white" css={isScrolled && tw`shadow-md`}>
      <div tw="flex justify-between mx-auto max-w-screen-md px-3 md:p-0">
        <Logo />
        <ul tw="flex text-xl text-gray-700">
          <li tw="mr-6">Notes</li>
          <li tw="mr-6">Blog</li>
          <li>Github</li>
        </ul>
      </div>
    </nav>
  );
}
