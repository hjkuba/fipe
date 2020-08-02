import React from 'react';
import { END } from 'redux-saga';
import VehicleContent from '@/contents/VehicleContent';
import wrapper from '@/redux/store';
import { useSelector } from 'react-redux';
import { vehicleInfoFetchRequested } from '@/redux/actions';
import type { SagaStore } from '@/redux/store';
import { selectVehicleFetchFailed } from '@/redux/selectors';
import Error from './_error';

function VehiclePage() {
  const vehicleFetchFailed = useSelector(selectVehicleFetchFailed);

  if (vehicleFetchFailed) {
    return <Error statusCode={500} />;
  }

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
