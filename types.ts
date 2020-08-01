export interface Marca {
  codigo: string;
  nome: string;
}

export interface Modelo {
  codigo: number;
  nome: string;
}

export interface Ano {
  codigo: string;
  nome: string;
}

export interface Automovel {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  TipoVeiculo: number;
  SiglaCombustivel: string;
}
