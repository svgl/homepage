import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import 'twin.macro';
import { useBoop } from '../utils/useBoop';
import { useIsScrolled } from '../utils/useIsScrolled';

/* Logo idea from Max Stoiber (https://github.com/mxstbr/mxstbr.com/blob/master/components/Nav/Logo.js) */

function shouldShow(props) {
  if (props.scrolled) {
    if (props.showOnScroll) return true;
    if (props.hideOnScroll) return false;
  }
  if (props.showOnScroll) return false;
  return true;
}

const Handle = styled.span`
  transition: opacity 250ms ease-in, margin 350ms ease-in-out;
  ${(props) => {
    if (shouldShow(props)) {
      return css`
        opacity: 1;
      `;
    }
    return css`
      opacity: 0;
      margin-right: ${props.marginOnHide || '-0.5em'};
    `;
  }}
`;

export function Logo() {
  const { isScrolled } = useIsScrolled();
  const [style, trigger] = useBoop({ rotation: 5 });

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      <Link to="/">
        <h2 tw="text-2xl">
          <Handle scrolled={isScrolled} showOnScroll>
            &lt;
          </Handle>
          s
          <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-1.7em">
            eth&nbsp;
          </Handle>
          v
          <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-.9em">
            er
          </Handle>
          g
          <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-1em">
            ey
          </Handle>
          l
          <Handle scrolled={isScrolled} hideOnScroll>
            e
          </Handle>
          <Handle scrolled={isScrolled} showOnScroll>
            &nbsp;/&gt;
          </Handle>
        </h2>
      </Link>
    </animated.span>
  );
}
