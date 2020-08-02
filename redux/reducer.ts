import { HYDRATE } from 'next-redux-wrapper';

import type { AnyAction } from 'redux';
import type { Marca, Modelo, Ano, Automovel } from '@/types';

import { ActionType } from './actions';

export interface State {
  brands: Marca[];
  models: Modelo[];
  years: Ano[];
  modelFetching: boolean;
  yearFetching: boolean;
  brandFetchFailed: boolean;
  modelFetchFailed: boolean;
  yearFetchFailed: boolean;
  vehicleFetchFailed: boolean;
  selectedBrand?: Marca;
  selectedModel?: Modelo;
  selectedYear?: Ano;
  vehicle?: Automovel;
}

const initialState: State = {
  brands: [],
  models: [],
  years: [],
  modelFetching: false,
  yearFetching: false,
  brandFetchFailed: false,
  modelFetchFailed: false,
  yearFetchFailed: false,
  vehicleFetchFailed: false,
};

function reducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ActionType.BRAND_FETCH_REQUESTED:
      return { ...state, models: [], years: [] };
    case ActionType.BRAND_FETCH_SUCCEEDED:
      return { ...state, brands: action.payload };
    case ActionType.BRAND_FETCH_FAILED:
      return { ...state, brandFetchFailed: true };
    case ActionType.BRAND_SELECTED: {
      const { selectedModel, selectedYear, ...newState } = state;
      return {
        ...newState,
        selectedBrand: action.payload,
        models: [],
        years: [],
        modelFetching: true,
        modelFetchFailed: false,
      };
    }
    case ActionType.MODEL_FETCH_SUCCEEDED:
      return { ...state, models: action.payload, modelFetching: false };
    case ActionType.MODEL_FETCH_FAILED:
      return { ...state, modelFetchFailed: true, modelFetching: false };
    case ActionType.MODEL_SELECTED: {
      const { selectedYear, ...newState } = state;
      return {
        ...newState,
        selectedModel: action.payload,
        years: [],
        yearFetching: true,
        yearFetchFailed: false,
      };
    }
    case ActionType.YEAR_SELECTED:
      return { ...state, selectedYear: action.payload };
    case ActionType.YEAR_FETCH_SUCCEEDED:
      return { ...state, years: action.payload, yearFetching: false };
    case ActionType.YEAR_FETCH_FAILED:
      return { ...state, yearFetching: false, yearFetchFailed: true };
    case ActionType.VEHICLE_INFO_FETCH_SUCCEEDED:
      return { ...state, vehicle: action.payload };
    case ActionType.VEHICLE_INFO_FETCH_FAILED:
      return { ...state, vehicleFetchFailed: true };
    default:
      return state;
  }
}

export default reducer;
