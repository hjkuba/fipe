import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModels, selectCurrentModel } from '@/redux/selectors';
import { modelSelected } from '@/redux/actions';
import { Select } from 'grommet';
import { Modelo } from '@/types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;
`;

function ModelSelector() {
  const dispatch = useDispatch();
  const models = useSelector(selectModels);
  const selectedModel = useSelector(selectCurrentModel);

  function handleChange({ option }: { option: Modelo }) {
    dispatch(modelSelected(option));
  }

  return (
    <Container>
      <Select
        placeholder="Selecione um modelo"
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
