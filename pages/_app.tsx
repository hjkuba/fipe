import React from 'react';
import wrapper from '@/redux/store';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
