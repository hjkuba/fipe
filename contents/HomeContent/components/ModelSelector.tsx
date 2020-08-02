import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Selector } from '@/components';
import { modelSelected } from '@/redux/actions';
import {
  selectModels,
  selectCurrentModel,
  selectModelFetching,
  selectModelFetchFailed,
} from '@/redux/selectors';
import { Modelo } from '@/types';

function ModelSelector() {
  const dispatch = useDispatch();
  const models = useSelector(selectModels);
  const selectedModel = useSelector(selectCurrentModel);
  const modelFetching = useSelector(selectModelFetching);
  const modelFetchFailed = useSelector(selectModelFetchFailed);

  function handleChange({ option }: { option: Modelo }) {
    dispatch(modelSelected(option));
  }

  return (
    <Selector<Modelo>
      loading={modelFetching}
      error={modelFetchFailed}
      label="Modelo"
      disabled={models.length === 0}
      options={models}
      value={selectedModel}
      labelKey="nome"
      onChange={handleChange}
    />
  );
}

export default ModelSelector;
