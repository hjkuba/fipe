import axios from 'axios';

import type { Marca, Modelo, Ano, Automovel } from '@/types';

interface ModelResponse {
  modelos: Modelo[];
  anos: Ano[];
}

const BASE_URL = `${process.env.NEXT_PUBLIC_FIPE_API_URL}/api/v1`;

export async function fetchBrands() {
  const { data } = await axios.get<Marca[]>(`${BASE_URL}/carros/marcas`);
  return data;
}

export async function fetchModels(brandCode: string) {
  const { data } = await axios.get<ModelResponse>(
    `${BASE_URL}/carros/marcas/${brandCode}/modelos`,
  );
  return data.modelos;
}

export async function fetchYears(brandCode: string, modelCode: number) {
  const { data } = await axios.get<Ano[]>(
    `${BASE_URL}/carros/marcas/${brandCode}/modelos/${modelCode}/anos`,
  );
  return data;
}

export async function fetchVehicleInfo(
  brandCode: string,
  modelCode: number,
  yearCode: string,
) {
  const { data } = await axios.get<Automovel>(
    `${BASE_URL}/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`,
  );
  return data;
}
