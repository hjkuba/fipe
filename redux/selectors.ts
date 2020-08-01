import type { State } from '@/redux/reducer';

export function selectBrands(state: State) {
  return state.marcas;
}

export function selectModels(state: State) {
  return state.modelos;
}

export function selectYears(state: State) {
  return state.anos;
}

export function selectCurrentBrand(state: State) {
  return state.marcaSelecionada;
}

export function selectCurrentModel(state: State) {
  return state.modeloSelecionado;
}

export function selectCurrentYear(state: State) {
  return state.anoSelecionado;
}

export function selectCurrentVehicle(state: State) {
  return state.automovel;
}

export function selectEnableSearch(state: State) {
  return !!(
    state.marcaSelecionada &&
    state.modeloSelecionado &&
    state.anoSelecionado
  );
}

export default selectBrands;
