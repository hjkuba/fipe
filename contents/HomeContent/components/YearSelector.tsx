import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectYears,
  selectCurrentYear,
  selectIsYearLoading,
  selectYearFetchFailed,
} from '@/redux/selectors';
import { yearSelected } from '@/redux/actions';
import { Select } from 'grommet';
import { Ano } from '@/types';
import styled from 'styled-components';
import LoadIcon from './LoadIcon';

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

const SelectError = styled.div`
  border: 1px solid #4300d24f;
  color: #4300d24f;
  font-weight: 600;
  height: 51px;
  border-radius: 4px;
  padding: 11px;
`;

function YearSelector() {
  const dispatch = useDispatch();
  const years = useSelector(selectYears);
  const selectedYear = useSelector(selectCurrentYear);
  const isYearLoading = useSelector(selectIsYearLoading);
  const yearFetchFailed = useSelector(selectYearFetchFailed);

  function handleChange({ option }: { option: Ano }) {
    dispatch(yearSelected(option));
  }

  if (yearFetchFailed) {
    return (
      <Container>
        <Label>Ano</Label>
        <SelectError>Ocorreu um erro. Tente novamente</SelectError>
      </Container>
    );
  }

  return (
    <Container>
      <Label>Ano</Label>
      <Select
        icon={isYearLoading ? LoadIcon : true}
        focusIndicator={false}
        dropHeight="small"
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
