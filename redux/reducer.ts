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
}

const initialState: State = {
  marcas: [],
  modelos: [],
  anos: [],
};

function reducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ActionType.BRAND_FETCH_SUCCEEDED:
      return { ...state, marcas: action.payload };
    case ActionType.BRAND_SELECTED:
      return { ...state, marcaSelecionada: action.payload };
    case ActionType.MODEL_SELECTED:
      return { ...state, modeloSelecionado: action.payload };
    case ActionType.MODEL_FETCH_SUCCEEDED:
      return { ...state, modelos: action.payload };
    case ActionType.YEAR_SELECTED:
      return { ...state, anoSelecionado: action.payload };
    case ActionType.YEAR_FETCH_SUCCEEDED:
      return { ...state, anos: action.payload };
    case ActionType.VEHICLE_INFO_FETCH_SUCCEEDED:
      return { ...state, automovel: action.payload };
    default:
      return state;
  }
}

export default reducer;
