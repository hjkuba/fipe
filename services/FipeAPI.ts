import axios from 'axios';
import type { Marca, Modelo, Ano, Automovel } from '@/types';

interface ModelResponse {
  modelos: Modelo[];
  anos: Ano[];
}

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/';

export async function fetchBrands() {
  const { data } = await axios.get<Marca[]>(`${BASE_URL}/carros/marcas`);
  return data;
}

export async function fetchModels(brand: Marca) {
  const { data } = await axios.get<ModelResponse>(
    `${BASE_URL}/carros/marcas/${brand.codigo}/modelos`,
  );
  return data.modelos;
}

export async function fetchYears(brand: Marca, model: Modelo) {
  const { data } = await axios.get<Ano[]>(
    `${BASE_URL}/carros/marcas/${brand.codigo}/modelos/${model.codigo}/anos`,
  );
  return data;
}

export async function fetchVehicleInfo(brand: Marca, model: Modelo, year: Ano) {
  const { data } = await axios.get<Automovel>(
    `${BASE_URL}/carros/marcas/${brand.codigo}/modelos/${model.codigo}/anos/${year.codigo}`,
  );
  return data;
}
