import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Selector } from '@/components';
import { selectBrands, selectCurrentBrand } from '@/redux/selectors';
import { brandSelected } from '@/redux/actions';

import type { Marca } from '@/types';

function BrandSelector() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const selectedBrand = useSelector(selectCurrentBrand);

  function handleChange({ option }: { option: Marca }) {
    dispatch(brandSelected(option));
  }

  return (
    <Selector<Marca>
      label="Marca"
      disabled={brands.length === 0}
      options={brands}
      value={selectedBrand}
      labelKey="nome"
      onChange={handleChange}
    />
  );
}

export default BrandSelector;
