import React, { FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import throttle from "lodash/throttle";

import { MainMenu } from "../main-menu/main-menu.component";
import { Logo } from "../logo/logo.component";

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

const StyledHeader = styled.div<{ shouldShowMenu: boolean }>(
  ({ shouldShowMenu }) => css`
    padding: 20px 40px;
    box-shadow: rgba(0, 0, 0, 0.08) 0 1px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    transition: transform 0.35s;

    ${!shouldShowMenu &&
      css`
        transform: translateY(-100%);
      `};

    @media only screen and (max-width: 560px) {
      padding: 20px 30px;
    }

    @media only screen and (max-width: 320px) {
      padding: 20px;
    }

    svg {
      display: block;
    }
  `
);

const HomePageLink = styled.a`
  font-size: 0;
`;

export const Header: FC = () => {
  const scrollOffset = useRef(0);
  const [shouldShowMenu, setShouldShowMenu] = useState(true);
  const scrollThreshold = 30;

  const handleScroll = throttle(() => {
    const offset = scrollOffset.current;
    const currentOffset = window.pageYOffset;

    if (currentOffset <= 80) {
      setShouldShowMenu(true);
    } else if (currentOffset < offset - scrollThreshold) {
      setShouldShowMenu(true);
    } else if (currentOffset > offset + 5) {
      setShouldShowMenu(false);
    }

    scrollOffset.current = currentOffset;
  }, 60);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { toggleButton, drawer } = MainMenu();

  return (
    <StickyHeader>
      <StyledHeader shouldShowMenu={shouldShowMenu}>
        <Link href="/" passHref>
          <HomePageLink>
            <Logo /> Go to homepage
          </HomePageLink>
        </Link>
        {toggleButton}
      </StyledHeader>
      {drawer}
    </StickyHeader>
  );
};
