import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCurrentVehicle } from '@/redux/selectors';
import Link from 'next/link';
import { Anchor } from 'grommet';

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Box = styled.main`
  border-bottom: 2px solid #00b0aa;
  margin-bottom: 16px;
`;

const Label = styled.span`
  color: #00b0aa;
  text-transform: uppercase;
  padding-right: 12px;
  margin-right: 12px;
  border-right: 2px solid #00b0aa;
`;

const LinkWrapper = styled.div`
  margin-bottom: 16px;
  text-decoration: underline;
`;

const Value = styled.span``;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.8rem;
  color: #00b0aa;
`;

function Item({ label, value }) {
  return (
    <ItemContainer>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </ItemContainer>
  );
}

function VehicleContent() {
  const vehicle = useSelector(selectCurrentVehicle);

  return (
    <div>
      <LinkWrapper>
        <Link href="/">
          <Anchor color="#00b0aa">Voltar</Anchor>
        </Link>
      </LinkWrapper>
      <Box>
        <Item label="Marca" value={vehicle?.Marca} />
        <Item label="Modelo" value={vehicle?.Modelo} />
        <Item label="Ano" value={vehicle?.AnoModelo} />
        <Item label="Tipo do Veículo" value={vehicle?.TipoVeiculo} />
        <Item label="Combustível" value={vehicle?.Combustivel} />
        <Item label="Sigla do Combustível" value={vehicle?.SiglaCombustivel} />
        <Item label="Mês de Referência" value={vehicle?.MesReferencia} />
        <Item label="Código FIPE" value={vehicle?.CodigoFipe} />
      </Box>
      <Price>{vehicle?.Valor}</Price>
    </div>
  );
}

export default VehicleContent;
