import React from 'react';
import { END } from 'redux-saga';
import VehicleContent from '@/contents/VehicleContent';
import wrapper from '@/redux/store';
import { vehicleInfoFetchRequested } from '@/redux/actions';
import type { SagaStore } from '@/redux/store';

function VehiclePage() {
  return <VehicleContent />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const { brand, model, year } = query;
    store.dispatch(
      vehicleInfoFetchRequested(String(brand), String(model), String(year)),
    );
    store.dispatch(END);
    await (store as SagaStore).sagaTask?.toPromise();
  },
);

export default VehiclePage;
