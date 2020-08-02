import React from 'react';
import { Select } from 'grommet';
import styled from 'styled-components';

import type { ThemeType } from 'grommet';

import LoadIcon from './icons/LoadIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Label = styled.span`
  margin-bottom: 8px;
  font-weight: light;
  text-transform: uppercase;
  color: ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.brand};
`;

const SelectError = styled.div`
  padding: 11px;
  height: 51px;
  border: 1px solid
    ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.['accent-1']};
  border-radius: 4px;
  font-weight: 600;
  color: ${({ theme }: { theme: ThemeType }) =>
    theme.global?.colors?.['accent-1']};
  opacity: 0.5;
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
