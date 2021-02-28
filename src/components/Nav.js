import React from 'react';
import styled from 'styled-components';
import { usePrefersDarkTheme } from '../utils/usePrefersDarkTheme';
import { Logo } from './Logo';

const NavStyles = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
      margin-right: 1rem;
    }

    a &[aria-current='page'] {
      color: var(--accent-color);
    }

    a {
      display: flex;
      align-items: center;

      svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }

  .icon {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-left: 0.25rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export function Nav() {
  const { prefersDarkTheme, toggleDarkTheme } = usePrefersDarkTheme();

  return (
    <NavStyles>
      <Logo />
      <div>
        <ul className="links">
          <li>
            <button type="button" onClick={() => toggleDarkTheme()}>
              {prefersDarkTheme ? (
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </li>
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
