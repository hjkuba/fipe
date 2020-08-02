import React from 'react';
import { Select } from 'grommet';
import styled from 'styled-components';

import LoadIcon from './icons/LoadIcon';

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

interface SelectorProps<T> {
  error?: boolean;
  loading?: boolean;
  label?: string;
  disabled?: boolean;
  options: (string | T)[];
  value?: string | object | T;
  labelKey?: string;
  onChange?: (arg: { option: T }) => void;
}

function Selector<T>({
  error = false,
  loading = false,
  label,
  disabled,
  options,
  value,
  labelKey,
  onChange,
}: SelectorProps<T>) {
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      {error ? (
        <SelectError>Ocorreu um erro. Tente novamente</SelectError>
      ) : (
        <Select
          icon={loading ? LoadIcon : true}
          focusIndicator={false}
          dropHeight="small"
          disabled={disabled}
          options={options as (string | object)[]}
          value={value as string | object}
          labelKey={labelKey}
          onChange={onChange}
        />
      )}
    </Container>
  );
}

export default Selector;
