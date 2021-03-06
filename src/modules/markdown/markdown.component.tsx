import React, { FC, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { easeInOutQuart } from "../../styles/easing";

const MarkdownContainer = styled.div(
  ({ theme }) => css`
    word-break: break-word;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    p,
    pre,
    figure {
      margin: 1.8rem 0;

      ul,
      ol {
        margin: 0;
      }
    }

    && > *:last-child {
      margin-bottom: 0;
    }

    h1 {
      ${theme.typography.h1};
    }

    h2 {
      ${theme.typography.h2};
    }

    h3 {
      ${theme.typography.h3};
    }

    h4 {
      ${theme.typography.h4};
    }

    h5 {
      ${theme.typography.h6};
    }

    h6 {
      ${theme.typography.h6};
    }

    p {
      ${theme.typography.body};
    }

    h1:first-child {
      margin-top: 0;
      margin-bottom: 0.3em;
      ${theme.typography.h1};
    }

    figure {
      div {
        display: block;
        position: relative;
        overflow: hidden;
        background: #eee;

        /**
         * Fix Safari overflow hidden + border-radius bug
         * https://stackoverflow.com/a/16681137/1123556
         */
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);

        img {
          position: absolute;
          top: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;

          &.fadeInOnLoad {
            transition: opacity 0.25s ${easeInOutQuart};

            &:not(.hasLoaded) {
              opacity: 0;
            }
          }
        }
      }

      figcaption {
        margin-top: 10px;
        ${theme.typography.caption};
      }
    }

    ul,
    ol {
      padding: 0 20px;
    }

    strong {
      color: ${theme.colors.textPrimary};
    }

    a {
      &:focus,
      &:hover {
        color: ${theme.colors.primary};
      }
    }

    blockquote {
      padding-left: 20px;
      border-left: solid #ccc 3px;

      p {
        ${theme.typography.quote};
      }
    }

    code {
      ${theme.typography.code};
    }

    pre code {
      ${theme.typography.code};
      display: block;
      padding: 20px;
    }
  `
);

export const Markdown: FC<{
  children: string;
}> = ({ children, ...otherProps }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = containerRef.current!.querySelectorAll<HTMLImageElement>(
      "img.fadeInOnLoad"
    );

    images.forEach(elem => {
      if (elem.complete) {
        return setTimeout(() => elem.classList.add("hasLoaded"), 1);
      }

      elem.onload = () => {
        elem.classList.add("hasLoaded");
      };
    });

    return () => {
      images.forEach(elem => {
        elem.onload = null;
      });
    };
  }, []);

  return (
    <MarkdownContainer
      ref={containerRef}
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
