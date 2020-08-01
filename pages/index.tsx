import React from 'react';
import axios from 'axios';
import { Marca } from '../types';

interface HomePageProps {
  brands: Marca[];
}

function HomePage({ brands }: HomePageProps) {
  return (
    <ul>
      {brands.map((brand) => (
        <li key={brand.codigo}>{brand.nome}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const { data: brands } = await axios.get(
    'https://parallelum.com.br/fipe/api/v1/carros/marcas',
  );
  return {
    props: { brands },
  };
}

export default HomePage;
