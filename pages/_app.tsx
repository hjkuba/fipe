import React from 'react';
import wrapper from '@/redux/store';
import { Grommet } from 'grommet';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={{ global: { font: { family: 'Poppins' } } }}>
      <MainLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </MainLayout>
    </Grommet>
  );
}

export default wrapper.withRedux(App);
