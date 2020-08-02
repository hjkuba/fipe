import type { State } from '@/redux/reducer';

export function selectBrands(state: State) {
  return state.brands;
}

export function selectModels(state: State) {
  return state.models;
}

export function selectYears(state: State) {
  return state.years;
}

export function selectCurrentBrand(state: State) {
  return state.selectedBrand;
}

export function selectCurrentModel(state: State) {
  return state.selectedModel;
}

export function selectCurrentYear(state: State) {
  return state.selectedYear;
}

export function selectCurrentVehicle(state: State) {
  return state.vehicle;
}

export function selectEnableSearch(state: State) {
  return !!(state.selectedBrand && state.selectedModel && state.selectedYear);
}

export function selectModelFetching(state: State) {
  return state.modelFetching;
}

export function selectYearFetching(state: State) {
  return state.yearFetching;
}

export function selectBrandFetchFailed(state: State) {
  return state.brandFetchFailed;
}

export function selectModelFetchFailed(state: State) {
  return state.modelFetchFailed;
}

export function selectYearFetchFailed(state: State) {
  return state.yearFetchFailed;
}

export function selectVehicleFetchFailed(state: State) {
  return state.vehicleFetchFailed;
}

export default selectBrands;
