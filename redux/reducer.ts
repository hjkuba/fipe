import { HYDRATE } from 'next-redux-wrapper';
import type { AnyAction } from 'redux';
import type { Marca } from '@/types';

import { ActionType } from './actions';

export interface State {
  marcas: Marca[];
}

const initialState: State = {
  marcas: [],
};

function reducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ActionType.BRAND_FETCH_SUCCEEDED:
      return { ...state, marcas: action.payload };
    default:
      return state;
  }
}

export default reducer;
