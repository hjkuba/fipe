import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModels } from '@/redux/selectors';
import { modelSelected } from '@/redux/actions';

import type { ChangeEvent } from 'react';

function ModelSelector() {
  const dispatch = useDispatch();
  const modelos = useSelector(selectModels);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedModel = modelos.find(
      (modelo) => modelo.codigo === Number(event.target.value),
    );
    if (selectedModel) dispatch(modelSelected(selectedModel));
  }

  return (
    <>
      <select onChange={handleChange}>
        {modelos.map((modelo) => (
          <option key={modelo.codigo} value={modelo.codigo}>
            {modelo.nome}
          </option>
        ))}
      </select>
    </>
  );
}

export default ModelSelector;
