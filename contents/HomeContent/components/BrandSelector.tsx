import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBrands, selectCurrentBrand } from '@/redux/selectors';
import { brandSelected } from '@/redux/actions';
import { Select } from 'grommet';
import { Marca } from '@/types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;
`;

function BrandSelector() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const selectedBrand = useSelector(selectCurrentBrand);

  function handleChange({ option }: { option: Marca }) {
    dispatch(brandSelected(option));
  }

  return (
    <Container>
      <Select
        placeholder="Selecione uma marca"
        disabled={brands.length === 0}
        options={brands}
        value={selectedBrand}
        labelKey="nome"
        onChange={handleChange}
      />
    </Container>
  );
}

export default BrandSelector;
