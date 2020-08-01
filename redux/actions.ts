import type { Marca, Modelo, Ano, Automovel } from '@/types';

export enum ActionType {
  BRAND_FETCH_REQUESTED = 'BRAND_FETCH_REQUESTED',
  BRAND_FETCH_SUCCEEDED = 'BRAND_FETCH_SUCCEEDED',
  BRAND_FETCH_FAILED = 'BRAND_FETCH_FAILED',
  BRAND_SELECTED = 'BRAND_SELECTED',
  MODEL_FETCH_SUCCEEDED = 'MODEL_FETCH_SUCCEEDED',
  MODEL_FETCH_FAILED = 'MODEL_FETCH_FAILED',
  MODEL_SELECTED = 'MODEL_SELECTED',
  YEAR_FETCH_SUCCEEDED = 'YEAR_FETCH_SUCCEEDED',
  YEAR_FETCH_FAILED = 'YEAR_FETCH_FAILED',
  YEAR_SELECTED = 'YEAR_SELECTED',
  VEHICLE_INFO_FETCH_REQUESTED = 'VEHICLE_INFO_FETCH_REQUESTED',
  VEHICLE_INFO_FETCH_SUCCEEDED = 'VEHICLE_INFO_FETCH_SUCCEEDED',
  VEHICLE_INFO_FETCH_FAILED = 'VEHICLE_INFO_FETCH_FAILED',
}

export function brandFetchRequested() {
  return { type: ActionType.BRAND_FETCH_REQUESTED };
}

export function brandFetchSucceeded(brands: Marca[]) {
  return { type: ActionType.BRAND_FETCH_SUCCEEDED, payload: brands };
}

export function brandFetchFailed(err: Error) {
  return { type: ActionType.BRAND_FETCH_FAILED, error: err };
}

export function brandSelected(brand: Marca) {
  return { type: ActionType.BRAND_SELECTED, payload: brand };
}

export function modelFetchSucceeded(models: Modelo[]) {
  return { type: ActionType.MODEL_FETCH_SUCCEEDED, payload: models };
}

export function modelFetchFailed(err: Error) {
  return { type: ActionType.MODEL_FETCH_FAILED, error: err };
}

export function modelSelected(model: Modelo) {
  return { type: ActionType.MODEL_SELECTED, payload: model };
}

export function yearFetchSucceeded(years: Ano[]) {
  return { type: ActionType.YEAR_FETCH_SUCCEEDED, payload: years };
}

export function yearFetchFailed(err: Error) {
  return { type: ActionType.YEAR_FETCH_FAILED, error: err };
}

export function yearSelected(year: Ano) {
  return { type: ActionType.YEAR_SELECTED, payload: year };
}

export function vehicleInfoFetchRequested(
  brandCode: string,
  modelCode: string,
  yearCode: string,
) {
  return {
    type: ActionType.VEHICLE_INFO_FETCH_REQUESTED,
    payload: {
      brandCode,
      modelCode,
      yearCode,
    },
  };
}

export function vehicleInfoFetchSucceeded(vehicle: Automovel) {
  return {
    type: ActionType.VEHICLE_INFO_FETCH_SUCCEEDED,
    payload: vehicle,
  };
}

export function vehicleInfoFetchFailed(err: Error) {
  return {
    type: ActionType.VEHICLE_INFO_FETCH_FAILED,
    error: err,
  };
}
