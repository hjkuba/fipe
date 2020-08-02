import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Selector } from '@/components';
import { yearSelected } from '@/redux/actions';
import {
  selectYears,
  selectCurrentYear,
  selectYearFetching,
  selectYearFetchFailed,
} from '@/redux/selectors';
import { Ano } from '@/types';

function YearSelector() {
  const dispatch = useDispatch();
  const years = useSelector(selectYears);
  const selectedYear = useSelector(selectCurrentYear);
  const yearFetching = useSelector(selectYearFetching);
  const yearFetchFailed = useSelector(selectYearFetchFailed);

  function handleChange({ option }: { option: Ano }) {
    dispatch(yearSelected(option));
  }

  return (
    <Selector<Ano>
      loading={yearFetching}
      error={yearFetchFailed}
      label="Ano"
      disabled={years.length === 0}
      options={years}
      value={selectedYear}
      labelKey="nome"
      onChange={handleChange}
    />
  );
}

export default YearSelector;
