import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectYears } from '@/redux/selectors';
import { yearSelected } from '@/redux/actions';

import type { ChangeEvent } from 'react';

function YearSelector() {
  const dispatch = useDispatch();
  const anos = useSelector(selectYears);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedYear = anos.find((ano) => ano.codigo === event.target.value);
    if (selectedYear) dispatch(yearSelected(selectedYear));
  }

  return (
    <>
      <select onChange={handleChange}>
        {anos.map((ano) => (
          <option key={ano.codigo} value={ano.codigo}>
            {ano.nome}
          </option>
        ))}
      </select>
    </>
  );
}

export default YearSelector;
