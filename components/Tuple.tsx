import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Label = styled.span`
  color: #00b0aa;
  text-transform: uppercase;
  padding-right: 12px;
  margin-right: 12px;
  border-right: 2px solid #00b0aa;
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
