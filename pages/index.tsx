import React from 'react';
import { END } from 'redux-saga';
import HomeContent from '@/contents/HomeContent';
import { useSelector } from 'react-redux';
import wrapper from '@/redux/store';
import { brandFetchRequested } from '@/redux/actions';
import type { SagaStore } from '@/redux/store';
import { selectBrandFetchHasError } from '@/redux/selectors';
import Error from './_error';

function HomePage() {
  const brandFetchHasError = useSelector(selectBrandFetchHasError);

  if (brandFetchHasError) {
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
