import React from 'react';
import { END } from 'redux-saga';
import HomeContent from '@/contents/HomeContent';
import wrapper from '@/redux/store';
import { brandFetchRequested } from '@/redux/actions';
import type { SagaStore } from '@/redux/store';

function HomePage() {
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
