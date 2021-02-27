import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

const NavStyles = styled.nav`
  .links a {
    &[aria-current='page'] {
      font: bold;
    }
  }
`;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavStyles>
      <div>
        <Logo />
        <div tw="flex sm:hidden">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div>
          <ul
            className="links"
          >
            <li tw="mr-6">
              <Link to="/blog" tw="hover:text-brand-gold">
                Blog
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/svgl"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <div tw="inline-block h-4 w-4 ml-1">
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
      </div>
    </NavStyles>
  );
}
