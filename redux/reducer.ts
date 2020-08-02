import { HYDRATE } from 'next-redux-wrapper';
import type { AnyAction } from 'redux';
import type { Marca, Modelo, Ano, Automovel } from '@/types';

import { ActionType } from './actions';

export interface State {
  marcas: Marca[];
  modelos: Modelo[];
  anos: Ano[];
  marcaSelecionada?: Marca;
  modeloSelecionado?: Modelo;
  anoSelecionado?: Ano;
  automovel?: Automovel;
  isModelLoading: boolean;
  isYearLoading: boolean;
  brandFetchHasError: boolean;
  modelFetchFailed: boolean;
  yearFetchFailed: boolean;
  vehicleFetchFailed: boolean;
}

const initialState: State = {
  marcas: [],
  modelos: [],
  anos: [],
  isModelLoading: false,
  isYearLoading: false,
  brandFetchHasError: false,
  modelFetchFailed: false,
  yearFetchFailed: false,
  vehicleFetchFailed: false,
};

function reducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ActionType.BRAND_FETCH_REQUESTED:
      return { ...state, modelos: [], anos: [] };
    case ActionType.BRAND_FETCH_SUCCEEDED:
      return { ...state, marcas: action.payload };
    case ActionType.BRAND_FETCH_FAILED:
      return { ...state, brandFetchHasError: true };
    case ActionType.BRAND_SELECTED: {
      const { modeloSelecionado, anoSelecionado, ...newState } = state;
      return {
        ...newState,
        marcaSelecionada: action.payload,
        modelos: [],
        anos: [],
        isModelLoading: true,
        modelFetchFailed: false,
      };
    }
    case ActionType.MODEL_FETCH_SUCCEEDED:
      return { ...state, modelos: action.payload, isModelLoading: false };
    case ActionType.MODEL_FETCH_FAILED:
      return { ...state, modelFetchFailed: true, isModelLoading: false };
    case ActionType.MODEL_SELECTED: {
      const { anoSelecionado, ...newState } = state;
      return {
        ...newState,
        modeloSelecionado: action.payload,
        anos: [],
        isYearLoading: true,
        yearFetchFailed: false,
      };
    }
    case ActionType.YEAR_SELECTED:
      return { ...state, anoSelecionado: action.payload };
    case ActionType.YEAR_FETCH_SUCCEEDED:
      return { ...state, anos: action.payload, isYearLoading: false };
    case ActionType.YEAR_FETCH_FAILED:
      return { ...state, isYearLoading: false, yearFetchFailed: true };
    case ActionType.VEHICLE_INFO_FETCH_SUCCEEDED:
      return { ...state, automovel: action.payload };
    case ActionType.VEHICLE_INFO_FETCH_FAILED:
      return { ...state, vehicleFetchFailed: true };
    default:
      return state;
  }
}

export default reducer;
