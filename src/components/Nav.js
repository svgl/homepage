import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

const NavStyles = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;

    a &[aria-current='page'] {
      color: var(--accent-color);
    }

    a {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-left: 0.25rem;
  }
`;

export function Nav() {
  return (
    <NavStyles>
      <Logo />
      <div>
        <ul className="links">
          <li>
            <a href="https://github.com/svgl" target="_blank" rel="noreferrer">
              Github
              <div className="icon" tw="inline-block h-4 w-4 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}
