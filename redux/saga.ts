import { takeLatest, put, all, select } from 'redux-saga/effects';
import {
  ActionType,
  brandFetchSucceeded,
  brandFetchFailed,
  modelFetchSucceeded,
  modelFetchFailed,
  yearFetchSucceeded,
  yearFetchFailed,
  vehicleInfoFetchSucceeded,
  vehicleInfoFetchFailed,
} from '@/redux/actions';
import { selectCurrentBrand } from '@/redux/selectors';
import * as FipeAPI from '@/services/FipeAPI';

import type { AnyAction } from 'redux';

// FETCH_BRANDS
function* fetchBrands() {
  try {
    const brands = yield FipeAPI.fetchBrands();
    yield put(brandFetchSucceeded(brands));
  } catch (err) {
    yield put(brandFetchFailed(err));
  }
}

// FETCH_MODELS
function* fetchModels(action: AnyAction) {
  try {
    const models = yield FipeAPI.fetchModels(action.payload.codigo);
    yield put(modelFetchSucceeded(models));
  } catch (err) {
    yield put(modelFetchFailed(err));
  }
}

// FETCH_YEARS
function* fetchYears(action: AnyAction) {
  try {
    const brand = yield select(selectCurrentBrand);
    const years = yield FipeAPI.fetchYears(brand.codigo, action.payload.codigo);
    yield put(yearFetchSucceeded(years));
  } catch (err) {
    yield put(yearFetchFailed(err));
  }
}

// FETCH_VEHICLE_INFO
function* fetchVehicleInfo(action: AnyAction) {
  try {
    const { brandCode, modelCode, yearCode } = action.payload;
    const vehicleInfo = yield FipeAPI.fetchVehicleInfo(
      brandCode,
      modelCode,
      yearCode,
    );
    yield put(vehicleInfoFetchSucceeded(vehicleInfo));
  } catch (err) {
    yield put(vehicleInfoFetchFailed(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(ActionType.BRAND_FETCH_REQUESTED, fetchBrands),
    takeLatest(ActionType.BRAND_SELECTED, fetchModels),
    takeLatest(ActionType.MODEL_SELECTED, fetchYears),
    takeLatest(ActionType.VEHICLE_INFO_FETCH_REQUESTED, fetchVehicleInfo),
  ]);
}
