import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectModels,
  selectCurrentModel,
  selectIsModelLoading,
  selectModelFetchFailed,
} from '@/redux/selectors';
import { modelSelected } from '@/redux/actions';
import { Select } from 'grommet';
import { Modelo } from '@/types';
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

function ModelSelector() {
  const dispatch = useDispatch();
  const models = useSelector(selectModels);
  const selectedModel = useSelector(selectCurrentModel);
  const isModelLoading = useSelector(selectIsModelLoading);
  const modelFetchFailed = useSelector(selectModelFetchFailed);

  function handleChange({ option }: { option: Modelo }) {
    dispatch(modelSelected(option));
  }

  if (modelFetchFailed) {
    return (
      <Container>
        <Label>Modelo</Label>
        <SelectError>Ocorreu um erro. Tente novamente</SelectError>
      </Container>
    );
  }

  return (
    <Container>
      <Label>Modelo</Label>
      <Select
        icon={isModelLoading ? LoadIcon : true}
        focusIndicator={false}
        dropHeight="small"
        disabled={models.length === 0}
        options={models}
        value={selectedModel}
        labelKey="nome"
        onChange={handleChange}
      />
    </Container>
  );
}

export default ModelSelector;
