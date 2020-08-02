import React from 'react';
import styled from 'styled-components';

import type { ThemeType } from 'grommet';

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Label = styled.span`
  padding-right: 12px;
  margin-right: 12px;
  border-right: 2px solid
    ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.brand};
  text-transform: uppercase;
  color: ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.brand};
`;

interface TupleProps {
  label: string;
  value: string | number;
}

function Tuple({ label, value }: TupleProps) {
  return (
    <ItemContainer>
      <Label>{label}</Label>
      <span>{value}</span>
    </ItemContainer>
  );
}

export default Tuple;
