import React from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import HomeContent from '@/contents/HomeContent';
import { brandFetchRequested } from '@/redux/actions';
import { selectBrandFetchFailed } from '@/redux/selectors';
import wrapper from '@/redux/store';

import type { SagaStore } from '@/redux/store';

import Error from './_error';

function HomePage() {
  const brandFetchFailed = useSelector(selectBrandFetchFailed);

  if (brandFetchFailed) {
    return <Error statusCode={500} />;
  }

  return <HomeContent />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(brandFetchRequested());
    store.dispatch(END);
    await (store as SagaStore).sagaTask?.toPromise();
  },
);

export default HomePage;
