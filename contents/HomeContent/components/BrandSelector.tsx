import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBrands, selectCurrentBrand } from '@/redux/selectors';
import { brandSelected } from '@/redux/actions';
import { Select } from 'grommet';
import { Marca } from '@/types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Label = styled.span`
  font-weight: light;
  text-transform: uppercase;
  color: #00b0aa;
  margin-bottom: 8px;
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
      <Label>Marca</Label>
      <Select
        focusIndicator={false}
        dropHeight="small"
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
