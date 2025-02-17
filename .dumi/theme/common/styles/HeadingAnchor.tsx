import React from 'react';
import { css, Global } from '@emotion/react';

export default () => (
  <Global
    styles={css`
h1,
h2,
h3,
h4,
h5,
h6 {
  > a[aria-hidden]:first-child {
    float: left;
    width: 20px;
    padding-inline-end: 4px;
    margin-inline-start: -24px;
    // hide phantom blank node
    font-size: 0;
    text-align: right;
    line-height: inherit;

    [data-direction='rtl'] & {
      float: right;
    }

    &:hover {
      border: 0;
    }

    > .icon-link::before {
      content: '#';
      font-size: 20px;
    }
  }

  &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
    visibility: hidden;
  }
}
    `}
  />
);
