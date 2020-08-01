import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { brandFetchSucceeded } from '@/redux/actions';

// FETCH_BRANDS
function* fetchBrands() {
  try {
    const response = yield axios.get(
      'https://parallelum.com.br/fipe/api/v1/carros/marcas',
    );
    yield put(brandFetchSucceeded(response.data));
  } catch (err) {
    yield put({ type: 'BRAND_FETCH_FAILED', error: err.message });
  }
}

export default function* rootSaga() {
  yield takeLatest('BRAND_FETCH_REQUESTED', fetchBrands);
}
