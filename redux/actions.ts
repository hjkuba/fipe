import type { Marca } from '@/types';

export enum ActionType {
  BRAND_FETCH_REQUESTED = 'BRAND_FETCH_REQUESTED',
  BRAND_FETCH_SUCCEEDED = 'BRAND_FETCH_SUCCEEDED',
  BRAND_FETCH_FAILED = 'BRAND_FETCH_FAILED',
}

export function brandFetchRequested() {
  return { type: ActionType.BRAND_FETCH_REQUESTED };
}

export function brandFetchSucceeded(brands: Marca[]) {
  return { type: ActionType.BRAND_FETCH_SUCCEEDED, payload: brands };
}
