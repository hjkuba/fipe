import type { State } from '@/redux/reducer';

export function selectBrands(state: State) {
  return state.marcas;
}

export default selectBrands;
