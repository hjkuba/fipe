import React from 'react';
import { Grommet } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import MainLayout from '@/layouts/MainLayout';
import wrapper from '@/redux/store';
import grommetTheme from '@/themes/grommet';

import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={grommetTheme}>
      <GlobalStyle />
      <MainLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </MainLayout>
    </Grommet>
  );
}

export default wrapper.withRedux(App);
