import React from 'react';
import { useSelector } from 'react-redux';
import { selectBrands } from '@/redux/selectors';

function BrandSelector() {
  const marcas = useSelector(selectBrands);

  return (
    <>
      <select>
        {marcas.map((marca) => (
          <option key={marca.codigo}>{marca.nome}</option>
        ))}
      </select>
    </>
  );
}

export default BrandSelector;
