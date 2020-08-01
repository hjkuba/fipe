import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBrands } from '@/redux/selectors';
import { brandSelected } from '@/redux/actions';

import type { ChangeEvent } from 'react';

function BrandSelector() {
  const dispatch = useDispatch();
  const marcas = useSelector(selectBrands);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedBrand = marcas.find(
      (marca) => marca.codigo === event.target.value,
    );
    if (selectedBrand) dispatch(brandSelected(selectedBrand));
  }

  return (
    <>
      <select onChange={handleChange}>
        {marcas.map((marca) => (
          <option key={marca.codigo} value={marca.codigo}>
            {marca.nome}
          </option>
        ))}
      </select>
    </>
  );
}

export default BrandSelector;
