import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectYears, selectCurrentYear } from '@/redux/selectors';
import { yearSelected } from '@/redux/actions';
import { Select } from 'grommet';
import { Ano } from '@/types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;
`;

function YearSelector() {
  const dispatch = useDispatch();
  const years = useSelector(selectYears);
  const selectedYear = useSelector(selectCurrentYear);

  function handleChange({ option }: { option: Ano }) {
    dispatch(yearSelected(option));
  }

  return (
    <Container>
      <Select
        placeholder="Selecione um ano"
        disabled={years.length === 0}
        options={years}
        value={selectedYear}
        labelKey="nome"
        onChange={handleChange}
      />
    </Container>
  );
}

export default YearSelector;
